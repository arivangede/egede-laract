<?php

namespace App\Http\Controllers;

use App\Models\KK;
use App\Models\KTP;
use App\Models\Penduduk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

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
            'ktpName' => 'string'
        ]);

        $image = $request->file('ktp');

        if ($penduduk) {
            if ($image->isValid()) {
                if ($isKTPavailable) {
                    Storage::delete($isKTPavailable->file);
                    $img = Image::make($image);
                    $img->resize(750, 750, function ($constraint) {
                        $constraint->aspectRatio();
                    });
                    $imageQuality = 100;
                    $maxFileSize = 1024 * 1024;
                    $imageData = (string) $img->encode('jpg', $imageQuality);
                    while (strlen($imageData) > $maxFileSize) {
                        $imageQuality -= 1;
                        $imageData = (string) $img->encode('jpg', $imageQuality);
                    }
                    $filename = md5($imageData) . '.jpg';
                    $filePath = '/berkasKu/user-ktp/' . $filename;
                    Storage::disk('public')->put($filePath, $imageData);
                    $isKTPavailable->update(['file' => $filePath, 'file_name' => $validatedData['ktpName']]);
                    return to_route('user.berkasku')->with('message', 'Data File KTP Berhasil Diperbarui');
                } else {
                    $img = Image::make($image);
                    $img->resize(750, 750, function ($constraint) {
                        $constraint->aspectRatio();
                    });
                    $imageQuality = 100;
                    $maxFileSize = 1024 * 1024;
                    $imageData = (string) $img->encode('jpg', $imageQuality);
                    while (strlen($imageData) > $maxFileSize) {
                        $imageQuality -= 1;
                        $imageData = (string) $img->encode('jpg', $imageQuality);
                    }
                    $filename = md5($imageData) . '.jpg';
                    $filePath = '/berkasKu/user-ktp/' . $filename;
                    Storage::disk('public')->put($filePath, $imageData);
                    KTP::create([
                        'nik' => $nik,
                        'file' => $filePath,
                        'file_name' => $validatedData['ktpName']
                    ]);
                    return redirect()->route('user.berkasku')->with('message', 'Data File KTP Berhasil Diperbarui');
                }
            } else {
                return to_route('user.berkasku')->with('message', 'Data File KTP Tidak Valid');
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
            'kkName' => 'string'
        ]);

        $image = $request->file('kk');

        if ($penduduk) {
            if ($image->isValid()) {
                if ($isKkAvailable) {
                    Storage::delete($isKkAvailable->file);
                    $img = Image::make($image);
                    $img->resize(750, 750, function ($constraint) {
                        $constraint->aspectRatio();
                    });
                    $imageQuality = 100;
                    $maxFileSize = 1024 * 1024;
                    $imageData = (string) $img->encode('jpg', $imageQuality);
                    while (strlen($imageData) > $maxFileSize) {
                        $imageQuality -= 1;
                        $imageData = (string) $img->encode('jpg', $imageQuality);
                    }
                    $filename = md5($imageData) . '.jpg';
                    $filePath = '/berkasKu/user-kk/' . $filename;
                    Storage::disk('public')->put($filePath, $imageData);
                    $isKkAvailable->update(['file' => $filePath, 'file_name' => $validatedData['kkName']]);
                    return to_route('user.berkasku')->with('message', 'Data File KK Berhasil Diperbarui');
                } else {
                    $img = Image::make($image);
                    $img->resize(750, 750, function ($constraint) {
                        $constraint->aspectRatio();
                    });
                    $imageQuality = 100;
                    $maxFileSize = 1024 * 1024;
                    $imageData = (string) $img->encode('jpg', $imageQuality);
                    while (strlen($imageData) > $maxFileSize) {
                        $imageQuality -= 1;
                        $imageData = (string) $img->encode('jpg', $imageQuality);
                    }
                    $filename = md5($imageData) . '.jpg';
                    $filePath = '/berkasKu/user-kk/' . $filename;
                    Storage::disk('public')->put($filePath, $imageData);
                    KK::create([
                        'no_kk' => $penduduk_kk,
                        'file' => $filePath,
                        'file_name' => $validatedData['kkName']
                    ]);
                    return to_route('user.berkasku')->with('message', 'Data File KK Berhasil Diperbarui');
                }
            } else {
                return to_route('user.berkasku')->with('message', 'Data File KK Tidak Valid');
            }
        }
    }

    public function destroyKtp()
    {
        $user = auth()->user();
        $nik = $user->nik;
        $ktp = KTP::where('nik', $nik)->first();
        $filepath = '/' . $ktp->file;



        if ($ktp) {
            Storage::delete($filepath);
            $ktp->delete();
            return to_route('user.berkasku')->with('message', 'Data Ktp Berhasil di Hapus');
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
