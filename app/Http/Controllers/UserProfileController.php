<?php

namespace App\Http\Controllers;

use App\Models\Buku;
use App\Models\Dusun;
use App\Models\Penduduk;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

use Intervention\Image\Facades\Image;
use function Laravel\Prompts\error;

class UserProfileController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $nik = $user->nik;
        $desa_id = Penduduk::where('nik', $nik)->value('desa_id');

        $listDusun = Dusun::where('desa_id', $desa_id)
            ->select('id', 'nama_dusun')
            ->distinct()
            ->orderBy('nama_dusun', 'asc')
            ->get();

        return Inertia::render('EditProfil', [
            'listDusun' => $listDusun,
        ]);
    }

    public function edit(Request $request)
    {

        $user = auth()->user();
        $nik = $user->nik;
        $penduduk = Penduduk::where('nik', $nik)->first();

        $validatedData = $request->validate([
            'tempatLahir' => 'regex:/^[A-Za-z\s]+$/|min:2|max:20',
            'tglLahir' => 'date_format:Y-m-d',
            'jenisKelamin' => 'string|max:9',
            'agama' => 'string|max:11',
            'sukuBangsa' => 'regex:/^[A-Za-z\s]+$/|min:2|max:30',
            'kewarganegaraan' => 'string|max:3',
            'pendidikanTerakhir' => 'string',
            'pekerjaan' => 'string|min:2|max:20',
            'penghasilan' => 'numeric',
            'alamat' => 'string|min:2|max:50',
            'dusun' => 'numeric',
            'noTelp' => 'string|min:10|max:13'
        ], [
            'tempatLahir.regex' => 'Kolom tempat lahir hanya boleh berisi huruf dan spasi.',
            'tempatLahir.min' => 'Kolom tempat lahir tidak boleh kurang dari 2 karakter.',
            'tempatLahir.max' => 'Kolom tempat lahir tidak boleh lebih dari 20 karakter.',
            'sukuBangsa.regex' => 'Kolom suku bangsa hanya boleh berisi huruf dan spasi.',
            'sukuBangsa.min' => 'Kolom suku bangsa tidak boleh kurang dari 2 karakter.',
            'sukuBangsa.max' => 'Kolom suku bangsa tidak boleh lebih dari 30 karakter.',
            'pekerjaan.min' => 'Kolom pekerjaan tidak boleh kurang dari 2 karakter.',
            'pekerjaan.max' => 'Kolom pekerjaan tidak boleh lebih dari 20 karakter.',
            'penghasilan.numeric' => 'Kolom penghasilan tidak boleh berisi karakter selain numerik.',
            'alamat.min' => 'Kolom alamat tidak boleh kurang dari 2 karakter.',
            'alamat.max' => 'Kolom alamat tidak boleh lebih dari 50 karakter.',
            'noTelp.numeric' => 'Kolom No Telepon tidak boleh berisi karakter selain numerik.',
            'noTelp.min' => 'Kolom No Telepon tidak boleh kurang dari 10 karakter numerik.',
            'noTelp.max' => 'Kolom No Telepon tidak boleh lebih dari 13 karakter numerik.',

        ]);

        $tempatLahir = $validatedData['tempatLahir'];
        $tglLahir = $validatedData['tglLahir'];
        $jenisKelamin = $validatedData['jenisKelamin'];
        $agama = $validatedData['agama'];
        $sukuBangsa = $validatedData['sukuBangsa'];
        $kewarganegaraan = $validatedData['kewarganegaraan'];
        $pendidikanTerakhir = $validatedData['pendidikanTerakhir'];
        $pekerjaan = $validatedData['pekerjaan'];
        $penghasilan = $validatedData['penghasilan'];
        $alamat = $validatedData['alamat'];
        $dusun = $validatedData['dusun'];
        $noTelp = $validatedData['noTelp'];

        if ($penduduk) {
            $updateData = [];
            if ($tempatLahir) {
                $updateData['tempat_lahir'] = $tempatLahir;
            }

            if ($tglLahir) {
                $updateData['tanggal_lahir'] = $tglLahir;
            }

            if ($jenisKelamin) {
                $updateData['jenis_kelamin'] = $jenisKelamin;
            }

            if ($agama) {
                $updateData['agama'] = $agama;
            }

            if ($sukuBangsa) {
                $updateData['suku_bangsa'] = $sukuBangsa;
            }

            if ($kewarganegaraan) {
                $updateData['kewarganegaraan'] = $kewarganegaraan;
            }

            if ($pendidikanTerakhir) {
                $updateData['pendidikan_terakhir'] = $pendidikanTerakhir;
            }

            if ($pekerjaan) {
                $updateData['pekerjaan'] = $pekerjaan;
            }

            if ($penghasilan) {
                $updateData['penghasilan'] = $penghasilan;
            }

            if ($alamat) {
                $updateData['alamat'] = $alamat;
            }

            if ($dusun) {
                $updateData['dusun_id'] = $dusun;
            }

            if ($noTelp) {
                $updateData['no_hp'] = $noTelp;
            }

            $penduduk->update($updateData);
            return to_route('user.profile')->with('message', 'Data Kependudukan Berhasil Diperbarui!');
        }
    }

    public function update(Request $request)
    {
        $user = auth()->user();
        $nik = $user->nik;
        $penduduk = Penduduk::where('nik', $nik)->first();
        $update = $request->input('update');

        $validated = $request->validate([
            'foto' => 'image'
        ], [
            'foto.image' => 'Jenis file harus gambar!',
        ]);

        if ($update == true && $request->file('foto')) {
            if ($penduduk && $penduduk->foto) {
                Storage::delete($penduduk->foto);
                $foto = Image::make($validated['foto']);
                $foto->resize(750, 750, function ($constraint) {
                    $constraint->aspectRatio();
                });
                $imageQuality = 100;
                $maxFileSize = 1024 * 1024;
                $imageData = (string) $foto->encode('jpeg', $imageQuality);
                while (strlen($imageData) > $maxFileSize) {
                    $imageQuality -= 1;
                    $imageData = (string) $foto->encode('jpeg', $imageQuality);
                }
                $filename = md5($imageData) . '.jpeg';
                $filePath = '/user-profiles/dauhpurikaja/' . $filename;
                Storage::disk('public')->put($filePath, $imageData);
                $penduduk->update(['foto' => $filePath]);
                return to_route('user.profile')->with('message', 'Foto Profil Berhasil Diperbarui');
            } else if ($penduduk && $penduduk->foto == null) {
                $foto = Image::make($validated['foto']);
                $foto->resize(750, 750, function ($constraint) {
                    $constraint->aspectRatio();
                });
                $imageQuality = 100;
                $maxFileSize = 1024 * 1024;
                $imageData = (string) $foto->encode('jpg', $imageQuality);
                while (strlen($imageData) > $maxFileSize) {
                    $imageQuality -= 1;
                    $imageData = (string) $foto->encode('jpeg', $imageQuality);
                }
                $filename = md5($imageData) . '.jpg';
                $filePath = '/user-profiles/dauhpurikaja/' . $filename;
                Storage::disk('public')->put($filePath, $imageData);
                $penduduk->update(['foto' => $filePath]);
                return to_route('user.profile')->with('message', 'Foto Profil Berhasil Diperbarui');
            }
        }
    }
    public function destroy(Request $request)
    {
        $user = auth()->user();
        $nik = $user->nik;
        $penduduk = Penduduk::where('nik', $nik)->first();
        $destroy = $request->input('destroy');

        if ($destroy == true) {
            if ($penduduk->foto) {
                Storage::delete($penduduk->foto);
                $penduduk->foto = null;
                $penduduk->save();

                return to_route('user.profile')->with('message', 'Foto Profil Berhasil Dihapus');
            }
        }
    }
}
