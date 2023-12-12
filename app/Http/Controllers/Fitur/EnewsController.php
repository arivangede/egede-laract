<?php

namespace App\Http\Controllers\Fitur;

use App\Http\Controllers\Controller;
use App\Models\Bookmark;
use App\Models\eNews;
use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

class EnewsController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $desaid = $user->desa_id;

        $berita = eNews::where('category', 'berita')->where('desa_id', $desaid)->orderBy('id', 'desc')->with('users', 'desa')->get();
        $beritaTerbaru = $berita->take(5);
        $beritaLainnya = $berita->skip(5)->values()->all();

        $pengumuman = eNews::where('category', 'pengumuman')->where('desa_id', $desaid)->orderBy('id', 'desc')->with('users', 'desa')->get();

        return Inertia::render('Fitur/Enews/Index', [
            'carousel' => $beritaTerbaru,
            'card' => $beritaLainnya,
            'pengumuman' => $pengumuman
        ]);
    }

    public function show($id, Request $request)
    {
        $selectedBerita = eNews::with('users', 'desa')->find($id);
        $likesCount = Like::where('enews_id', $id)->count();

        $existinglike = Like::where('user_id', auth()->id())->where('enews_id', $request->id)->first();
        $bookmarked = Bookmark::where('user_id', auth()->id())->where('enews_id', $request->id)->first();
        if (!$existinglike) {
            $like = false;
        } else {
            $like = true;
        }

        if (!$bookmarked) {
            $bookmark = false;
        } else {
            $bookmark = true;
        }

        return Inertia::render('Fitur/Enews/Show', [
            'berita' => $selectedBerita,
            'likes_count' => $likesCount,
            'liked' => $like,
            'bookmarked' => $bookmark
        ]);
    }

    public function pengumuman()
    {
        $user = auth()->user();
        $desa_id = $user->desa_id;


        $pengumuman = Enews::where('desa_id', $desa_id)->where('category', 'pengumuman');
        $jumlah = $pengumuman->count();

        return Inertia::render('Fitur/Enews/Form', [
            'enewscount' => $jumlah
        ]);
    }

    public function berita()
    {
        $user = auth()->user();
        $desa_id = $user->desa_id;


        $berita = Enews::where('desa_id', $desa_id)->where('category', 'berita');
        $jumlah = $berita->count();

        return Inertia::render('Fitur/Enews/Form', [
            'enewscount' => $jumlah
        ]);
    }

    public function createpengumuman(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|min:6|max:20',
            'desc' => 'required|string|max:3000',
            'photoFile' => 'required|image',
            'author' => 'required',
            'category' => 'required',
            'desaID' => 'required',
            'jenis' => 'required',
        ]);

        $user = auth()->user();
        $isAdmin = $user->kelas_id;

        if ($isAdmin == 2) {
            $picture = Image::make($validatedData['photoFile']);
            $picture->resize(750, 750, function ($constraint) {
                $constraint->aspectRatio();
            });
            $quality = 100;
            $maxsize = 1024 * 1024;
            $data = (string) $picture->encode('jpg', $quality);
            while (strlen($data) > $maxsize) {
                $quality -= 1;
                $data = (string) $picture->encoded('jpg', $quality);
            }
            $filename = md5($data) . '.jpg';
            $filepath = '/e-news/dauhpurikaja/pengumuman/' . $filename;
            Storage::disk('public')->put($filepath, $data);
            Enews::create([
                'title' => $validatedData['title'],
                'content' => $validatedData['desc'],
                'image' => $filepath,
                'author' => $validatedData['author'],
                'category' => $validatedData['category'],
                'desa_id' => $validatedData['desaID'],
                'jenis' => $validatedData['jenis'],
            ]);
        }
        return to_route('user.enews');
    }

    public function createberita(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|min:6|max:20',
            'desc' => 'required|string|max:3000',
            'photoFile' => 'required|image',
            'author' => 'required',
            'category' => 'required',
            'desaID' => 'required',
            'jenis' => 'required',
        ]);

        $user = auth()->user();
        $isAdmin = $user->kelas_id;

        if ($isAdmin == 2) {
            $picture = Image::make($validatedData['photoFile']);
            $picture->resize(750, 750, function ($constraint) {
                $constraint->aspectRatio();
            });
            $quality = 100;
            $maxsize = 1024 * 1024;
            $data = (string) $picture->encode('jpg', $quality);
            while (strlen($data) > $maxsize) {
                $quality -= 1;
                $data = (string) $picture->encoded('jpg', $quality);
            }
            $filename = md5($data) . '.jpg';
            $filepath = '/e-news/dauhpurikaja/berita/' . $filename;
            Storage::disk('public')->put($filepath, $data);
            Enews::create([
                'title' => $validatedData['title'],
                'content' => $validatedData['desc'],
                'image' => $filepath,
                'author' => $validatedData['author'],
                'category' => $validatedData['category'],
                'desa_id' => $validatedData['desaID'],
                'jenis' => $validatedData['jenis'],
            ]);
        }
        return to_route('user.enews');
    }


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


        return Inertia::render('Fitur/Enews/PanelAdmin', [
            'berita' => $berita,
            'pengumuman' => $pengumuman,
            'datachart' => $datachart
        ]);
    }
}
