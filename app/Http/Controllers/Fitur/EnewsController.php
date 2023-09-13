<?php

namespace App\Http\Controllers\Fitur;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EnewsController extends Controller
{
    public function index()
    {
        return Inertia::render('Fitur/Enews', [
            'berita' => [
                [
                    'Title1',
                    '02-02-2023',
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem ad inventore labore dolorum, quod at commodi
                cupiditate similique officiis consectetur.',
                    'Dauh Puri Kaja',
                    'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png'
                ],
                [
                    'Title2',
                    '02-02-2023',
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem ad inventore labore dolorum, quod at commodi
                cupiditate similique officiis consectetur.',
                    'Dauh Puri Kaja',
                    'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png'
                ],
                [
                    'Title3',
                    '02-02-2023',
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem ad inventore labore dolorum, quod at commodi
                cupiditate similique officiis consectetur.',
                    'Dauh Puri Kaja',
                    'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png'
                ],
                [
                    'Title4',
                    '02-02-2023',
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem ad inventore labore dolorum, quod at commodi
                cupiditate similique officiis consectetur.',
                    'Dauh Puri Kaja',
                    'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png'
                ],
                [
                    'Title5',
                    '02-02-2023',
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem ad inventore labore dolorum, quod at commodi
                cupiditate similique officiis consectetur.',
                    'Dauh Puri Kaja',
                    'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png'
                ]
            ]
        ]);
    }
}
