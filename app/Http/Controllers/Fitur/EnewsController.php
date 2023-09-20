<?php

namespace App\Http\Controllers\Fitur;

use App\Http\Controllers\Controller;
use App\Models\eNews;
use App\Models\Like;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EnewsController extends Controller
{
    public function index()
    {
        $berita = eNews::orderBy('id', 'desc')->with('users')->get();
        $beritaTerbaru = $berita->take(5);
        $beritaLainnya = $berita->skip(5)->values()->all();

        return Inertia::render('Fitur/Enews/Index', [
            'carousel' => $beritaTerbaru,
            'card' => $beritaLainnya
        ]);
    }

    public function show($id, Request $request)
    {
        $selectedBerita = eNews::with('users')->find($id);
        $likesCount = Like::where('enews_id', $id)->count();

        $existinglike = Like::where('user_id', auth()->id())->where('enews_id', $request->id)->first();
        if (!$existinglike) {
            $like = false;
        } else {
            $like = true;
        }

        return Inertia::render('Fitur/Enews/Show', [
            'berita' => $selectedBerita,
            'likes_count' => $likesCount,
            'liked' => $like
        ]);
    }
}
