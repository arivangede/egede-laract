<?php

namespace App\Http\Controllers;

use App\Models\eNews;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuestAppController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $desaid = $user->desa_id;

        $berita = eNews::where('category', 'berita')->where('desa_id', $desaid)->orderBy('id', 'desc')->with('users', 'desa')->get();
        $beritaTerbaru = $berita->take(5);

        $pengumuman = eNews::where('category', 'pengumuman')->where('desa_id', $desaid)->orderBy('id', 'desc')->with('users', 'desa')->get();
        $pengumumanTerbaru = $pengumuman->take(5);

        return Inertia::render('Homepage', [
            'berita' => $beritaTerbaru,
            'pengumuman' => $pengumumanTerbaru
        ]);
    }
}
