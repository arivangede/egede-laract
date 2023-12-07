<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Faker\Core\Number;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EnewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++) {
            // DB::table('enews')->insert([
            //     'category' => 'berita',
            //     'title' => 'Berita ' . $i,
            //     'author' => 1,
            //     'content' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eveniet id ad dignissimos quis omnis at nulla, error autem velit eligendi a, veritatis mollitia provident illum delectus necessitatibus quidem dolores?',
            //     'image' => 'https://images.pexels.com/photos/1877078/pexels-photo-1877078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            //     'desa_id' => 1,
            //     'jenis' => 'desa',
            //     'created_at' => Carbon::now(),
            // ]);

            // DB::table('enews')->insert([
            //     'category' => 'pengumuman',
            //     'title' => 'Pengumuman ' . $i,
            //     'author' => 1,
            //     'content' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eveniet id ad dignissimos quis omnis at nulla, error autem velit eligendi a, veritatis mollitia provident illum delectus necessitatibus quidem dolores?',
            //     'image' => 'https://images.pexels.com/photos/2040807/pexels-photo-2040807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            //     'desa_id' => 1,
            //     'jenis' => 'desa',
            //     'created_at' => Carbon::now(),
            // ]);
        }
    }
}
