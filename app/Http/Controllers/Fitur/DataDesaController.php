<?php

namespace App\Http\Controllers\Fitur;

use App\Http\Controllers\Controller;
use App\Models\Penduduk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DataDesaController extends Controller
{
    public function index(Request $request)
    {
        $desa = $request->input('desa');
        $kategori = $request->input('kategori');

        if ($desa && $kategori === 'pekerjaan') {
            $data = DB::table('penduduk')->where('desa', $desa)->select(DB::raw('pekerjaan as kategori'), DB::raw('count(*) as jumlah'))->groupBy('kategori')->get();
        } else if ($desa && $kategori === 'suku_bangsa') {
            $data = DB::table('penduduk')->where('desa', $desa)->select(DB::raw('suku_bangsa as kategori'), DB::raw('count(*) as jumlah'))->groupBy('kategori')->get();
        } else if ($desa && $kategori === 'agama') {
            $data = DB::table('penduduk')->where('desa', $desa)->select(DB::raw('agama as kategori'), DB::raw('count(*) as jumlah'))->groupBy('kategori')->get();
        } else if ($desa && $kategori === 'usia') {
            $data = DB::table('penduduk')
                ->select(
                    DB::raw('
                    CASE
                        WHEN TIMESTAMPDIFF(YEAR, tanggal_lahir, CURDATE()) < 15 THEN "anak-anak"
                        WHEN TIMESTAMPDIFF(YEAR, tanggal_lahir, CURDATE()) BETWEEN 15 AND 24 THEN "muda"
                        WHEN TIMESTAMPDIFF(YEAR, tanggal_lahir, CURDATE()) BETWEEN 25 AND 34 THEN "pekerja-awal"
                        WHEN TIMESTAMPDIFF(YEAR, tanggal_lahir, CURDATE()) BETWEEN 35 AND 44 THEN "paruh-baya"
                        WHEN TIMESTAMPDIFF(YEAR, tanggal_lahir, CURDATE()) BETWEEN 45 AND 54 THEN "pra-pensiun"
                        WHEN TIMESTAMPDIFF(YEAR, tanggal_lahir, CURDATE()) BETWEEN 55 AND 64 THEN "pensiun"
                        WHEN TIMESTAMPDIFF(YEAR, tanggal_lahir, CURDATE()) > 64 THEN "lansia"
                    END as kategori'),
                    DB::raw('count(*) as jumlah')
                )
                ->where('desa', $desa)
                ->groupBy('kategori')
                ->get();
        } else if (!$desa) {
            $data = null;
        } else {
            $data = null;
        }


        return Inertia::render('Fitur/DataDesa/Index', [
            'dataPenduduk' => $data
        ]);
    }

    public function analisa()
    {
        return Inertia::render('Fitur/DataDesa/AnalisaData');
    }
}
