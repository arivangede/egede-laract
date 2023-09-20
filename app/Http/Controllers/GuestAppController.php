<?php

namespace App\Http\Controllers;

use App\Models\eNews;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuestAppController extends Controller
{
    public function index()
    {
        $berita = eNews::orderBy('id', 'desc')->with('users')->get();
        $beritaTerbaru = $berita->take(5);

        return Inertia::render('Homepage', [
            'berita' => $beritaTerbaru,
        ]);
    }
}
