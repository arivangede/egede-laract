<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ActivityController extends Controller
{
    public function index(Request $request)
    {
        $user = auth()->user()->id;

        $filterbookmark = $request->input('filter');
        if ($filterbookmark) {
            $bookmarkList = Bookmark::where('user_id', $user)
                ->orderBy('id', 'desc')
                ->whereHas('enews', function ($query) use ($filterbookmark) {
                    $query->where('category', $filterbookmark);
                })
                ->with('enews')
                ->get();
        } else {
            $bookmarkList = Bookmark::where('user_id', $user)->orderBy('id', 'desc')->with('enews')->get();
        }

        return Inertia::render('Aktivitas', [
            'bookmarkList' => $bookmarkList
        ]);
    }
    public function destroybookmark(Request $request)
    {

        $user_id = $request->input('user_id');
        $enews_id = $request->input('enews_id');

        $bookmark = Bookmark::where('user_id', $user_id)
            ->where('enews_id', $enews_id)
            ->first();

        if ($bookmark) {
            $bookmark->delete();
        }
    }
    public function storebookmark(Request $request)
    {
        $user = auth()->user()->id;
        $validatedData = $request->validate([
            'news_id' => 'required|exists:enews,id'
        ]);

        $enews = $validatedData['news_id'];

        $hasBookmarked = Bookmark::where('user_id', $user)->where('enews_id', $enews)->first();

        if (!$hasBookmarked) {
            Bookmark::create([
                'enews_id' => $enews,
                'user_id' => $user
            ]);
        }
    }
}
