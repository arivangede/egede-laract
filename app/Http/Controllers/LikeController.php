<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LikeController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'news_id' => 'required|exists:enews,id'
        ]);

        $existinglike = Like::where('user_id', auth()->id())->where('enews_id', $request->news_id)->first();
        $newsId = $request->input('news_id');
        if (!$existinglike) {
            Like::create([
                'user_id' => auth()->id(),
                'enews_id' => $newsId
            ]);
        }
    }

    public function destroy(Request $request)
    {
        $user_id = $request->input('user_id');
        $enews_id = $request->input('news_id');

        $like = Like::where('user_id', $user_id)
            ->where('enews_id', $enews_id)
            ->first();

        if ($like) {
            $like->delete();
        }
    }
}
