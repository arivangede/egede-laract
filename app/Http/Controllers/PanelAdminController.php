<?php

namespace App\Http\Controllers;

use App\Models\eNews;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PanelAdminController extends Controller
{
    public function paneladmin()
    {
        $admin = auth()->user()->kelas_id;
        if ($admin == 2) {
            $desa_id = auth()->user()->desa_id;
            $berita = eNews::where('desa_id', $desa_id)->where('category', 'berita')->get();
            $pengumuman = eNews::where('desa_id', $desa_id)->where('category', 'pengumuman')->get();
            if ($berita->isNotEmpty() || $pengumuman->isNotEmpty()) {
                $datachart = eNews::where('desa_id', $desa_id)
                    ->select('category as category', DB::raw('count(*) as jumlah'))
                    ->groupBy('category')
                    ->get();
            } else {
                $datachart = [
                    ['category' => 'pengumuman', 'jumlah' => 0],
                    ['category' => 'berita', 'jumlah' => 0]
                ];
            }
        } else {
            return Inertia::render('kamu bukan admin desa!');
        }


        return Inertia::render('PanelAdmin', [
            'berita' => $berita,
            'pengumuman' => $pengumuman,
            'datachart' => $datachart
        ]);
    }

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


        return Inertia::render('Fitur/Enews/PanelEnews', [
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
        if ($idberita) {
            if ($useradmin == 2) {
                eNews::where('id', $id)->delete();
                return to_route('user.panelenews')->with('message', 'Berita berhasil dihapus');
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
        if ($idpengumuman) {
            if ($useradmin == 2) {
                eNews::where('id', $id)->delete();
                return to_route('user.panelenews')->with('message', 'Pengumuman berhasil dihapus');
            } else {
                return to_route('user.panelenews')->with('message', 'Kamu bukan admin!');
            }
        } else {
            return to_route('user.panelenews')->with('message', 'Pengumuman gagal dihapus');
        }
    }
}
