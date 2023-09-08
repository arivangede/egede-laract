<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Inertia\Inertia;

class GuestAppController extends Controller
{
    public function index()
    {
        return Inertia::render('Homepage');
    }
}
