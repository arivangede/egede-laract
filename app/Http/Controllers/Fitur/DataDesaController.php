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
