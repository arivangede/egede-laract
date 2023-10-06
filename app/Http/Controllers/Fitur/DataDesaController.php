<?php

namespace App\Http\Controllers\Fitur;

use App\Http\Controllers\Controller;
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
            $dataTable = DB::table('penduduk')->where('desa', $desa)->select(DB::raw('pekerjaan as kategori'), DB::raw('count(*) as jumlah'))->groupBy('kategori')->get();
            $dataChart = [];
        } else if ($desa && $kategori === 'suku_bangsa') {
            $dataTable = DB::table('penduduk')->where('desa', $desa)->select(DB::raw('suku_bangsa as kategori'), DB::raw('count(*) as jumlah'))->groupBy('kategori')->get();
            $dataChart = [];
        } else if ($desa && $kategori === 'agama') {
            $dataChart = DB::table('penduduk')->where('desa', $desa)->select(DB::raw('agama as kategori'), DB::raw('count(*) as jumlah'))->groupBy('kategori')->get();
            $dataTable = DB::table('penduduk')->where('desa', $desa)->select(DB::raw('agama as kategori'), DB::raw('count(*) as jumlah'))->groupBy('kategori')->get();
        } else if ($desa && $kategori === 'usia') {
            $dataChart = DB::table('penduduk')
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
            $dataTable = [];
        } else if ($desa && $kategori === 'jenis_kelamin') {
            $dataChart = DB::table('penduduk')->where('desa', $desa)->select(DB::raw('jenis_kelamin as kategori'), DB::raw('count(*) as jumlah'))->groupBy('kategori')->get();
            $dataTable = [];
        } else if ($desa && $kategori === 'pendidikan_terakhir') {
            $dataTable = DB::table('penduduk')->where('desa', $desa)->select(DB::raw('pendidikan_terakhir as kategori'), DB::raw('count(*) as jumlah'))->groupBy('kategori')->get();
            $dataChart = [];
        } else if ($desa && $kategori === 'stt_nikah') {
            $dataChart = DB::table('penduduk')->where('desa', $desa)->select(DB::raw('stt_nikah as kategori'), DB::raw('count(*) as jumlah'))->groupBy('kategori')->get();
            $dataTable = [];
        } else if (!$desa) {
            $dataChart = null;
            $dataTable = null;
        } else {
            $dataChart = null;
            $dataTable = null;
        }

        $jumlahPenduduk = DB::table('penduduk')
            ->where('desa', $desa)
            ->count();


        return Inertia::render('Fitur/DataDesa/Index', [
            'dataChart' => $dataChart,
            'dataTable' => $dataTable,
            'jumlahPenduduk' => $jumlahPenduduk
        ]);
    }

    public function analisa()
    {
        return Inertia::render('Fitur/DataDesa/AnalisaData');
    }
}
