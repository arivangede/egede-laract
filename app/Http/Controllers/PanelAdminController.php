<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use App\Models\eNews;
use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

    // regulasi-desa
    public function regulasi()
    {
        return Inertia::render('Fitur/Regulasi/Admin/PanelRegulasi');
    }
}
