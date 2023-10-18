<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

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

    public function logout()
    {
        Auth::logout();
        return to_route('user.login')->with('message', 'berhasil logout');
    }
}
