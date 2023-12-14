<?php

namespace App\Http\Controllers;

use App\Models\Penduduk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Models\Otp;
use App\Models\User;


class AuthController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ], [
            'username.required' => 'username belum diisi!',
            'password.required' => 'password belum diisi!'
        ]);

        $infologin = [
            'username' => $request->username,
            'password' => $request->password
        ];


        if (Auth::attempt($infologin)) {

            if (Auth::check()) {
                $user = Auth::user();
                if ($user->kelas_id === 1) {
                    return to_route('user.pilihdesa');
                } else {
                    return to_route('user.home')->with('message', true);;
                }
            }
        } else {
            return to_route('user.login')->withErrors('username / password salah');
        }
    }

    public function register()
    {
        return Inertia::render('Auth/Register');
    }

    public function generateOTP(Request $request)
    {
        $otp = rand(1000, 9999);

        $validatedData = $request->validate([
            'username' => 'string|max:10|required',
            'namaLengkap' => 'required',
            'nik' => 'string|max:18|required',
            'email' => 'email:dns|required',
            'password' => 'string|min:6',
            'confirmPassword' => 'string|min:6',
        ]);

        $agree = $request->input('isAgree');
        $username = $validatedData['username'];
        $namaLengkap = $validatedData['namaLengkap'];
        $nik = $validatedData['nik'];
        $email = $validatedData['email'];
        $password = $validatedData['password'];
        $confirmpassword = $validatedData['confirmPassword'];
        $desa = Penduduk::where('nik', $nik)->first();

        $isAvailable = User::where('nik', $nik)->first();


        if ($password == $confirmpassword) {
            if ($isAvailable) {
                return Inertia::render('Auth/Register')->with('message', 'NIK ini Sudah Terdaftar!');
            } else {
                User::create([
                    'username' => $username,
                    'nik' => $nik,
                    'email' => $email,
                    'password' => bcrypt($password),
                    'kelas_id' => 3,
                    'desa_id' => $desa->desa_id
                ]);
            }
        } else {
            return Inertia::render('Auth/Register')->with('message', 'Password dan ConfirmPassword tidak sama!');
        }


        $dataPenduduk = Penduduk::select('nik', 'nama')->where('nik', $nik)->first();

        if ($dataPenduduk) {
            if ($dataPenduduk->nama == $namaLengkap) {
                Otp::create([
                    'email' => $email,
                    'otp' => $otp
                ]);
            } else {
                return Inertia::render('Auth/Register')->with('message', 'Nama lengkap atau NIK yang anda masukan salah!');
            }
        } else {
            return Inertia::render('Auth/Register')->with('message', 'Nik atau Nama Lengkap anda tidak ditemukan di database kami');
        }


        Mail::raw("Kode OTP Anda : $otp", function ($message) use ($email) {
            $message->to($email)->subject('Kode OTP');
        });


        return to_route('user.verify')->with('message', 'kode OTP sudah dikirim ke email anda')->with('email', $request->input('email'));
    }

    public function sendAgainOtp(Request $request)
    {
        $email = $request->input('email');

        if ($email) {
            $otp = rand(1000, 9999);

            Otp::updateOrCreate(
                ['email' => $email],
                ['otp' => $otp]
            );


            Mail::raw("Kode OTP Anda : $otp", function ($message) use ($email) {
                $message->to($email)->subject('Kode OTP Baru');
            });

            return Inertia::render('Auth/VerifyOTP', ['message' => 'Kode OTP baru telah dikirim ke email anda!'])->with('email', $request->input('email'));
        }
    }

    public function verifyPage(Request $request)
    {
        $email = $request->session()->get('email');
        return Inertia::render('Auth/VerifyOTP', ['email' => $email]);
    }

    public function verifyOTP(Request $request)
    {
        $email = $request->input('email');
        $otp = $request->input('otp');

        $again = $request->input('again');

        $verifyOTP = Otp::where('email', $email)->latest()->first();

        if ($verifyOTP && !$again) {
            if ($verifyOTP->otp === $otp) {
                $user = User::where('email', $email)->first();
                $user->email_verified_at = now();
                $user->save();

                Otp::where('email',  $email)->delete();

                return to_route('user.login')->with('message', 'Akun berhasil Terverifikasi!, silahkan Login!');
            } else {
                return Inertia::render('Auth/VerifyOTP', ['error' => 'Kode OTP yang anda masukan salah!'])->with('email', $request->input('email'));
            }
        } else if (!$verifyOTP && !$again) {
            return Inertia::render('Auth/VerifyOTP', ['warning' => 'Tidak ada catatan OTP untuk Email yang anda masukan sebelumnya, coba lakukan daftar ulang!'])->with('email', $request->input('email'));
        }

        if ($again) {
            $otp = rand(1000, 9999);

            Otp::create([
                'email' => $email,
                'otp' => $otp
            ]);


            Mail::raw("Kode OTP Anda : $otp", function ($message) use ($email) {
                $message->to($email)->subject('Kode OTP Baru');
            });
            return Inertia::render('Auth/VerifyOTP', ['warning' => 'Kode OTP baru telah dikirim ke email anda!'])->with('email', $request->input('email'));
        }
    }

    public function logout()
    {
        Auth::logout();
        return to_route('user.login')->with('message', 'berhasil logout');
    }
}

// qdtl iloh wvzr ychh