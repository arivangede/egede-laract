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

    public function analisa(Request $request)
    {
        $desa = $request->input('desa');
        $selectedDusun = $request->input('dusun');
        $selectedJk = $request->input('jenis_kelamin');
        $selectedPekerjaan = $request->input('pekerjaan');
        $selectedSuku = $request->input('suku');
        $selectedUsia = $request->input('usia');
        $selectedSttNikah = $request->input('stt_nikah');
        $search = $request->input('search');

        $jumlahPenduduk = DB::table('penduduk')
            ->where('desa', $desa)
            ->count();

        $dusuns = Penduduk::where('desa', $desa)
            ->select('dusun')
            ->distinct()
            ->orderBy('dusun', 'asc')
            ->pluck('dusun');

        $jenisKelamin = Penduduk::where('desa', $desa)
            ->select('jenis_kelamin')
            ->distinct()
            ->orderBy('jenis_kelamin', 'asc')
            ->pluck('jenis_kelamin');

        $pekerjaan = Penduduk::where('desa', $desa)
            ->select('pekerjaan')
            ->distinct()
            ->orderBy('pekerjaan', 'asc')
            ->pluck('pekerjaan');

        $sukuBangsa = Penduduk::where('desa', $desa)
            ->select('suku_bangsa')
            ->distinct()
            ->orderBy('suku_bangsa', 'asc')
            ->pluck('suku_bangsa');

        $usia = Penduduk::where('desa', $desa)
            ->select(DB::raw('TIMESTAMPDIFF(YEAR, tanggal_lahir, CURDATE()) as usia'))
            ->distinct()
            ->orderBy('usia', 'asc')
            ->pluck('usia');

        $sttnikah = Penduduk::where('desa', $desa)
            ->select('stt_nikah')
            ->distinct()
            ->orderBy('stt_nikah', 'asc')
            ->pluck('stt_nikah');

        if (!$selectedDusun && !$selectedJk && !$selectedPekerjaan && !$selectedSuku && !$selectedUsia && !$selectedSttNikah) {
            $Penduduks = Penduduk::where('desa', $desa)->orderBy('id', 'desc')->get();
            $Penduduk = $Penduduks->take(5);
            $count = 0;
        } else {
            $Penduduks = Penduduk::where('desa', $desa)
                ->when($selectedDusun, function ($query, $selectedDusun) {
                    return $query->where('dusun', $selectedDusun);
                })
                ->when($selectedJk, function ($query, $selectedJk) {
                    return $query->where('jenis_kelamin', $selectedJk);
                })
                ->when($selectedPekerjaan, function ($query, $selectedPekerjaan) {
                    return $query->where('pekerjaan', $selectedPekerjaan);
                })
                ->when($selectedSuku, function ($query, $selectedSuku) {
                    return $query->where('suku_bangsa', $selectedSuku);
                })
                ->when($selectedUsia, function ($query, $selectedUsia) {
                    return $query->whereRaw('TIMESTAMPDIFF(YEAR, tanggal_lahir, CURDATE()) = ?', [$selectedUsia]);
                })
                ->when($selectedSttNikah, function ($query, $selectedSttNikah) {
                    return $query->where('stt_nikah', $selectedSttNikah);
                })
                ->when($search,  function ($query) use ($search) {
                    return $query->where('nama', 'like', '%' . $search . '%')
                        ->orWhere('nik', 'like', '%' . $search . '%')
                        ->orWhere('no_kk', 'like', '%' . $search . '%');
                })
                ->get();
            $Penduduk = $Penduduks->take(10);
            $count = $Penduduks->count();
        }


        return Inertia::render('Fitur/DataDesa/AnalisaData', [
            'jumlahPenduduk' => $jumlahPenduduk,
            'jumlahHasil' => $count,
            'dusunOptions' => $dusuns,
            'jkOptions' => $jenisKelamin,
            'pekerjaanOptions' => $pekerjaan,
            'sukuOptions' => $sukuBangsa,
            'usiaOptions' => $usia,
            'sttNikahOptions' => $sttnikah,
            'data' => $Penduduk,
        ]);
    }
}
