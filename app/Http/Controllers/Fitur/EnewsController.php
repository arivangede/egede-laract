<?php

namespace App\Http\Controllers\Fitur;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EnewsController extends Controller
{
    public function index()
    {
        $berita = [
            [
                'title' => 'Title1',
                'date' => '02-02-2023',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem ad inventore labore dolorum, quod at commodi
            cupiditate similique officiis consectetur.',
                'author' => 'Dauh Puri Kaja',
                'image' => 'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png'
            ],
            [
                'title' => 'Title2',
                'date' => '02-02-2023',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem ad inventore labore dolorum, quod at commodi
            cupiditate similique officiis consectetur.',
                'author' => 'Dauh Puri Kaja',
                'image' => 'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png'
            ],
            [
                'title' => 'Title3',
                'date' => '02-02-2023',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem ad inventore labore dolorum, quod at commodi
            cupiditate similique officiis consectetur.',
                'author' => 'Dauh Puri Kaja',
                'image' => 'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png'
            ],
            [
                'title' => 'Title4',
                'date' => '02-02-2023',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem ad inventore labore dolorum, quod at commodi
            cupiditate similique officiis consectetur.',
                'author' => 'Dauh Puri Kaja',
                'image' => 'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png'
            ],
            [
                'title' => 'Title5',
                'date' => '02-02-2023',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem ad inventore labore dolorum, quod at commodi
            cupiditate similique officiis consectetur.',
                'author' => 'Dauh Puri Kaja',
                'image' => 'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png'
            ]
        ];

        return Inertia::render('Fitur/Enews/Index', [
            'berita' => $berita,
        ]);
    }

    public function show($title)
    {
        $berita = [
            [
                'title' => 'Title1',
                'date' => '02-02-2023',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem ad inventore labore dolorum, quod at commodi
            cupiditate similique officiis consectetur.',
                'author' => 'Dauh Puri Kaja',
                'image' => 'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png'
            ],
            [
                'title' => 'Title2',
                'date' => '02-02-2023',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem ad inventore labore dolorum, quod at commodi
            cupiditate similique officiis consectetur.',
                'author' => 'Dauh Puri Kaja',
                'image' => 'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png'
            ],
            [
                'title' => 'Title3',
                'date' => '02-02-2023',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem ad inventore labore dolorum, quod at commodi
            cupiditate similique officiis consectetur.',
                'author' => 'Dauh Puri Kaja',
                'image' => 'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png'
            ],
            [
                'title' => 'Title4',
                'date' => '02-02-2023',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem ad inventore labore dolorum, quod at commodi
            cupiditate similique officiis consectetur.',
                'author' => 'Dauh Puri Kaja',
                'image' => 'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png'
            ],
            [
                'title' => 'Title5',
                'date' => '02-02-2023',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem ad inventore labore dolorum, quod at commodi
            cupiditate similique officiis consectetur.',
                'author' => 'Dauh Puri Kaja',
                'image' => 'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png'
            ]
        ];

        $newBerita = [];
        foreach ($berita as $item) {
            if ($item['title'] === $title) {
                $newBerita = $item;
            }
        }

        return Inertia::render('Fitur/Enews/Show', [
            'berita' => $newBerita
        ]);
    }
}
