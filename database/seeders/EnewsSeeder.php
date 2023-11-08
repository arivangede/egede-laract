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
        for ($i = 0; $i <= 10; $i++) {
            DB::table('enews')->insert([
                'title' => 'Title' . $i,
                'author' => 1,
                'content' => 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eveniet id ad dignissimos quis omnis at nulla, error autem velit eligendi a, veritatis mollitia provident illum delectus necessitatibus quidem dolores?',
                'image' => 'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png',
                'desa_id' => 1,
                'jenis' => 'berita-kota',
                'created_at' => Carbon::now(),
            ]);
        }
    }
}
