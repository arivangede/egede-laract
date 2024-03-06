<?php

namespace App\Http\Controllers\Fitur;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KeuanganController extends Controller
{
    public function indexKeuangan()
    {
        return Inertia::render('Fitur/Keuangan/Index');
    }
}
