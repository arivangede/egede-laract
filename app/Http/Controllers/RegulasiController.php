<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RegulasiController extends Controller
{
    public function index()
    {
        return Inertia::render('Fitur/Regulasi/Index');
    }

    public function show()
    {
        return Inertia::render('Fitur/Regulasi/Show');
    }

    public function create()
    {
        return Inertia::render('Fitur/Regulasi/Tambah');
    }
}
