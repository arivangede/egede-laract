<?php

namespace App\Http\Controllers;

use App\Models\Desa;
use App\Models\Penduduk;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilDesaController extends Controller
{
    public function index()
    {
        $user = auth()->user()->nik;
        $penduduk = Penduduk::where('nik', $user)->first();
        $nama_desa = null;

        if ($penduduk) {
            $desa = Desa::where('id', $penduduk->desa_id)->select('nama_desa')->first();
            if ($desa) {
                $nama_desa = $desa->nama_desa;
            }
        }

        return Inertia::render('Fitur/ProfilDesa/Index', [
            'desa' => $nama_desa,
        ]);
    }

    public function wilayahdesa()
    {
        return Inertia::render('Fitur/ProfilDesa/WilayahDesa');
    }
    public function sejarahdesa()
    {
        return Inertia::render('Fitur/ProfilDesa/SejarahDesa');
    }
    public function visimisi()
    {
        return Inertia::render('Fitur/ProfilDesa/VisiMisi');
    }
    public function struktur()
    {
        return Inertia::render('Fitur/ProfilDesa/Struktur');
    }
    public function lpm()
    {
        return Inertia::render('Fitur/ProfilDesa/LPM');
    }
}
