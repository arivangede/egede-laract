<?php

namespace App\Http\Controllers;

use App\Models\KK;
use App\Models\KTP;
use App\Models\Penduduk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BerkaskuController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $nik = $user->nik;
        $isKTPavailable = KTP::where('nik', $nik)->first();
        $penduduk = Penduduk::where('nik', $nik)->first();
        $penduduk_kk = $penduduk->no_kk;
        $isKkAvailable = KK::where('no_kk', $penduduk_kk)->first();

        if ($isKTPavailable) {
            $dataKtp = KTP::where('nik', $nik)->select('file', 'file_name')->first();
        } else {
            $dataKtp = ['file' => null, 'file_name' => null];
        }

        if ($isKkAvailable) {
            $dataKK = KK::where('no_kk', $penduduk_kk)->select('file', 'file_name')->first();
        } else {
            $dataKK = ['file' => null, 'file_name' => null];
        }


        return Inertia::render("BerkasKu", [
            'dataKtp' => $dataKtp,
            'dataKK' => $dataKK
        ]);
    }

    public function updateKtp(Request $request)
    {
        $user = auth()->user();
        $nik = $user->nik;
        $penduduk = Penduduk::where('nik', $nik)->first();
        $isKTPavailable = KTP::where('nik', $nik)->first();

        $validatedData = $request->validate([
            'ktp' => 'image|max:1024',
            'ktpName' => 'string'
        ], [
            'ktp.image' => 'File ktp harus gambar!',
            'ktp.max' => 'Ukuran file tidak boleh lebih dari 1mb!'
        ]);



        if ($penduduk) {

            if ($isKTPavailable) {
                Storage::delete($isKTPavailable->file);
                $validated['ktp'] = $request->file('ktp')->store('berkasKu/user-ktp');
                $isKTPavailable->update(['file' => $validated['ktp'], 'file_name' => $validatedData['ktpName']]);
                return to_route('user.berkasku')->with('message', 'Data File KTP Berhasil Diperbarui');
            } else {
                $filePath = $request->file('ktp')->store('berkasKu/user-ktp');
                KTP::create(['nik' => $nik, 'file' => $filePath, 'file_name' => $validatedData['ktpName']]);
                return to_route('user.berkasku')->with('message', 'Data File KTP Berhasil Diperbarui');
            }
        }
    }

    public function updateKk(Request $request)
    {
        $user = auth()->user();
        $nik = $user->nik;
        $penduduk = Penduduk::where('nik', $nik)->first();
        $penduduk_kk = $penduduk->no_kk;
        $isKkAvailable = KK::where('no_kk', $penduduk_kk)->first();

        $validatedData = $request->validate([
            'kk' => 'mimes:jpeg,png,jpg,pdf|max:1024',
            'kkName' => 'string'
        ], [
            'kk.mimes' => 'File ktp harus gambar atau pdf!',
            'kk.max' => 'Ukuran file tidak boleh lebih dari 1mb!'
        ]);



        if ($penduduk) {

            if ($isKkAvailable) {
                Storage::delete($isKkAvailable->file);
                $validated['kk'] = $request->file('kk')->store('berkasKu/user-kk');
                $isKkAvailable->update(['file' => $validated['kk'], 'file_name' => $validatedData['kkName']]);
                return to_route('user.berkasku')->with('message', 'Data File KK Berhasil Diperbarui');
            } else {
                $filePath = $request->file('kk')->store('berkasKu/user-kk');
                KK::create(['no_kk' => $penduduk_kk, 'file' => $filePath, 'file_name' => $validatedData['kkName']]);
                return to_route('user.berkasku')->with('message', 'Data File KK Berhasil Diperbarui');
            }
        }
    }

    public function destroyKtp()
    {
        $user = auth()->user();
        $nik = $user->nik;
        $ktp = KTP::where('nik', $nik)->first();

        if ($ktp) {
            Storage::delete($ktp->file);
            $ktp->delete();
            return to_route('user.berkasku')->with('message', 'Data Ktp Berhasil Dihapus');
        }
    }
    public function destroyKK()
    {
        $user = auth()->user();
        $nik = $user->nik;
        $penduduk = Penduduk::where('nik', $nik)->first();
        $penduduk_kk = $penduduk->no_kk;
        $kk = KK::where('no_kk', $penduduk_kk)->first();

        if ($kk) {
            Storage::delete($kk->file);
            $kk->delete();
            return to_route('user.berkasku')->with('message', 'Data KK Berhasil Dihapus');
        }
    }
}
