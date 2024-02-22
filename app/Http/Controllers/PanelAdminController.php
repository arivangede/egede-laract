<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use App\Models\eNews;
use App\Models\Like;
use App\Models\Regulasi;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PanelAdminController extends Controller
{
    public function enews()
    {
        $isadmin = auth()->user()->kelas_id;
        if ($isadmin == 2) {
            $desa_id = auth()->user()->desa_id;
            $berita = eNews::where('desa_id', $desa_id)
                ->where('category', 'berita')
                ->orderBy('id', 'desc')
                ->with('desa')
                ->get();

            $pengumuman = eNews::where('desa_id', $desa_id)
                ->where('category', 'pengumuman')
                ->orderBy('id', 'desc')
                ->with('desa')
                ->get();

            $countberita = eNews::where('desa_id', $desa_id)
                ->where('category', 'berita')
                ->count();

            $countpengumuman = eNews::where('desa_id', $desa_id)
                ->where('category', 'pengumuman')
                ->count();
        }


        return Inertia::render('Fitur/Enews/Admin/PanelEnews', [
            'berita' => $berita,
            'pengumuman' => $pengumuman,
            'beritacount' => $countberita,
            'pengumumancount' => $countpengumuman
        ]);
    }

    public function deleteberita($id)
    {
        $idberita = eNews::find($id);
        $useradmin = auth()->user()->kelas_id;
        $pathImage = $idberita->image;
        if ($idberita) {
            if ($useradmin == 2) {
                $likeCount = Like::where('enews_id', $id)->count();
                $bookmarkCount = Bookmark::where('enews_id', $id)->count();

                if ($likeCount > 0) {
                    Like::where('enews_id', $id)->delete();
                }

                if ($bookmarkCount > 0) {
                    Bookmark::where('enews_id', $id)->delete();
                }

                if (Storage::exists($pathImage)) {
                    Storage::delete($pathImage);
                    $idberita->delete();
                    return to_route('user.panelenews')->with('message', 'Berita berhasil dihapus');
                } else {
                    return to_route('user.panelenews')->with('message', 'File tidak ditemukan');
                }
            } else {
                return to_route('user.panelenews')->with('message', 'Kamu bukan admin!');
            }
        } else {
            return to_route('user.panelenews')->with('message', 'Berita gagal dihapus');
        }
    }

    public function deletepengumuman($id)
    {
        $idpengumuman = eNews::find($id);
        $useradmin = auth()->user()->kelas_id;
        $pathImage = $idpengumuman->image;
        if ($idpengumuman) {
            if ($useradmin == 2) {
                $likeCount = Like::where('enews_id', $id)->count();
                $bookmarkCount = Bookmark::where('enews_id', $id)->count();

                if ($likeCount > 0) {
                    Like::where('enews_id', $id)->delete();
                }

                if ($bookmarkCount > 0) {
                    Bookmark::where('enews_id', $id)->delete();
                }

                if (Storage::exists($pathImage)) {
                    Storage::delete($pathImage);
                    $idpengumuman->delete();
                    return to_route('user.panelenews')->with('message', 'Pengumuman berhasil dihapus');
                } else {
                    return to_route('user.panelenews')->with('message', 'File tidak ditemukan');
                }
            } else {
                return to_route('user.panelenews')->with('message', 'Kamu bukan admin!');
            }
        } else {
            return to_route('user.panelenews')->with('message', 'Pengumuman gagal dihapus');
        }
    }

    public function regulasi(Request $request)
    {
        $desa_id = Auth()->user()->desa_id;

        $data_total = Regulasi::where('desa_id', $desa_id)->get()->count();
        $data_perkel = Regulasi::where('desa_id', $desa_id)->where('jenis', 'perkel')->get()->count();
        $data_perdes = Regulasi::where('desa_id', $desa_id)->where('jenis', 'perdes')->get()->count();
        $data_berlaku = Regulasi::where('desa_id', $desa_id)->where('status', 'berlaku')->get()->count();
        $data_tidakberlaku = Regulasi::where('desa_id', $desa_id)->where('status', 'tidak berlaku')->get()->count();

        $jumlah = compact('data_total', 'data_perkel', 'data_perdes', 'data_berlaku', 'data_tidakberlaku');

        // Search
        $keyword = $request->input('keyword');
        $query = Regulasi::where('desa_id', $desa_id);

        if ($keyword) {
            $query->where(function ($q) use ($keyword) {
                $q->where('no_regulasi', 'like', "%$keyword%")
                    ->orWhere('tahun', 'like', "%$keyword%");
            });
        }

        // Filter
        $sortir = $request->input('sortir');
        $kategori = $request->input('kategori');
        $status = $request->input('status');
        $tanggal = $request->input('tanggal');

        if ($sortir) {
            if ($sortir == 'Terbaru') {
                $query->orderBy('id', 'desc');
            } else if ($sortir == 'Terlama') {
                $query->orderBy('id', 'asc');
            }
        }

        if ($kategori) {
            $query->where('jenis', $kategori);
        }

        if ($status) {
            $query->where('status', $status);
        }

        if ($tanggal) {
            $tanggalCarbon = Carbon::parse($tanggal);
            $tanggalOnly = $tanggalCarbon->toDateString();
            $query->whereDate('created_at', $tanggalOnly);
        }

        $dataRegulasi = $query->orderBy('id', 'desc')->get();

        return Inertia::render('Fitur/Regulasi/Admin/PanelRegulasi', [
            'jumlah' => $jumlah,
            'data' => $dataRegulasi
        ]);
    }

    public function formRegulasi()
    {
        return Inertia::render('Fitur/Regulasi/Admin/FormRegulasi');
    }

    public function createRegulasi(Request $request)
    {
        $desa_id = auth()->user()->desa_id;
        $user_id = auth()->user()->id;

        $validatedData = $request->validate([
            'status' => 'required|string',
            'jenis' => 'required|string',
            'noRegulasi' => 'required|string|size:2',
            'tahun' => 'required|string|size:4',
            'tentang' => 'required|string|max:50',
            'filePdf' => 'required|mimes:pdf',
        ]);

        if ($request->hasFile('filePdf')) {
            $pdfFile = $request->file('filePdf');
            $folder = "regulasi";
            $originalFilename = $pdfFile->getClientOriginalName();


            $timestamp = now()->timestamp;
            $storedFilename = $timestamp . '.pdf';
            $pdfFile->storeAs($folder, $storedFilename, 'public');

            Regulasi::create([
                'desa_id' => $desa_id,
                'author' => $user_id,
                'status' => $validatedData['status'],
                'jenis' => $validatedData['jenis'],
                'no_regulasi' => $validatedData['noRegulasi'],
                'tahun' => $validatedData['tahun'],
                'tentang' => $validatedData['tentang'],
                'file_name' => $originalFilename,
                'file_path' => $folder . '/' . $storedFilename,
            ]);

            return to_route('user.panelregulasi')->with('message', 'Data Baru Regulasi Berhasil Ditambahkan');
        }


        return back()->withErrors(['file' => 'File PDF harus diunggah.']);
    }


    public function deleteRegulasi($id)
    {
        $regulasi = Regulasi::find($id);

        if ($regulasi) {
            $file_path = $regulasi->file_path;

            if (Storage::exists($file_path)) {
                Storage::delete($file_path);
            } else {
                return redirect()->route('user.panelregulasi')->withErrors(['file' => 'File Regulasi Tidak Ditemukan.']);
            }

            $regulasi->delete();

            return to_route('user.panelregulasi')->with('message', 'Regulasi berhasil dihapus');
        } else {
            return to_route('user.panelregulasi')->withErrors(['file' => 'Data Regulasi Tidak Ditemukan.']);
        }
    }

    public function showEditForm($id)
    {
        $regulasi = Regulasi::find($id);

        if (!$regulasi) {
            return redirect()->route('user.panelregulasi')->withErrors(['error' => 'Data Regulasi tidak ditemukan']);
        }

        return Inertia::render('Fitur/Regulasi/Admin/FormRegulasi', [
            'data' => $regulasi,
        ]);
    }

    public function updateRegulasi($id, Request $request)
    {
        $regulasi = Regulasi::find($id);

        if (!$regulasi) {
            return redirect()->route('user.panelregulasi')->withErrors(['error' => 'Data Regulasi tidak ditemukan']);
        }

        $validatedData = $request->validate([
            'status' => 'required|string',
            'jenis' => 'required|string',
            'noRegulasi' => 'required|string|size:2',
            'tahun' => 'required|string|size:4',
            'tentang' => 'required|string|max:50',
            'filePdf' => 'nullable|mimes:pdf',
        ]);

        if ($request->hasFile('filePdf') && $regulasi->file_path) {
            Storage::delete($regulasi->file_path);
        }

        $regulasi->update([
            'status' => $validatedData['status'],
            'jenis' => $validatedData['jenis'],
            'no_regulasi' => $validatedData['noRegulasi'],
            'tahun' => $validatedData['tahun'],
            'tentang' => $validatedData['tentang'],
        ]);

        if ($request->hasFile('filePdf')) {
            $pdfFile = $request->file('filePdf');
            $folder = "regulasi";
            $originalFilename = $pdfFile->getClientOriginalName();

            $timestamp = now()->timestamp;
            $storedFilename = $timestamp . '.pdf';
            $pdfFile->storeAs($folder, $storedFilename, 'public');

            $regulasi->update([
                'file_name' => $originalFilename,
                'file_path' => $folder . '/' . $storedFilename,
            ]);
        }

        return to_route('user.panelregulasi')->with('message', 'Data Regulasi Berhasil Diperbaharui');
    }
}
