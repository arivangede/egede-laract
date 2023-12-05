<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SubProfilDesaController extends Controller
{
    public function Index($title, Request $request)
    {
        return Inertia::render('Fitur/ProfilDesa/sub/Sub', ['title' => $title]);
    }
}
