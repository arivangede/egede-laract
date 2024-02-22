<?php

namespace App\Http\Controllers;

use App\Models\Regulasi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegulasiController extends Controller
{
    public function index(Request $request)
    {
        $desa_id = Auth()->user()->desa_id;

        $sortir = $request->input('sortir');
        $keyword = $request->input('keyword');
        $kategori = $request->input('kategori');
        $status = $request->input('status');
        $tahun  = $request->input('tahun');

        $query = Regulasi::where('desa_id', $desa_id);

        if ($keyword) {
            $query->where(function ($q) use ($keyword) {
                $q->where('no_regulasi', 'like', "%$keyword%");
            });
        }

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

        if ($tahun) {
            $query->where('tahun', $tahun);
        }

        $data = $query->orderBy('id', 'desc')->get();

        return Inertia::render('Fitur/Regulasi/Index', [
            'data' => $data
        ]);
    }

    public function show($id)
    {
        $dataRegulasi = Regulasi::find($id);
        return Inertia::render('Fitur/Regulasi/Show', [
            'data' => $dataRegulasi
        ]);
    }
}
