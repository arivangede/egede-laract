<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DusunSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // DB::table('dusun')->insert([
        //     'nama_dusun' => 'Lelangon',
        //     'desa_id' => '1',
        // ]);
        // DB::table('dusun')->insert([
        //     'nama_dusun' => 'Lumintang',
        //     'desa_id' => '1',
        // ]);
        // DB::table('dusun')->insert([
        //     'nama_dusun' => 'Mekarsari',
        //     'desa_id' => '1',
        // ]);
        // DB::table('dusun')->insert([
        //     'nama_dusun' => 'Terunasari',
        //     'desa_id' => '1',
        // ]);
        // DB::table('dusun')->insert([
        //     'nama_dusun' => 'Wanasari',
        //     'desa_id' => '1',
        // ]);
        // DB::table('dusun')->insert([
        //     'nama_dusun' => 'Wangaya Kaja',
        //     'desa_id' => '1',
        // ]);
        // DB::table('dusun')->insert([
        //     'nama_dusun' => 'Wangaya Klod',
        //     'desa_id' => '1',
        // ]);
        // DB::table('dusun')->insert([
        //     'nama_dusun' => 'Wangaya Klod',
        //     'desa_id' => '1',
        // ]);
        DB::table('dusun')->insert([
            'nama_dusun' => 'Ambengan',
            'desa_id' => '2',
        ]);
        DB::table('dusun')->insert([
            'nama_dusun' => 'Bantas',
            'desa_id' => '2',
        ]);
        DB::table('dusun')->insert([
            'nama_dusun' => 'Cengkilung',
            'desa_id' => '2',
        ]);
    }
}
// Peguyangan Kangin :
// Ambengan
// Bantas
// Cengkilung
// Jenah
// Jurang Asri
// Kayangan
// Kedua
// Pengukuh
// Peninjoan
// Purnama Asri
// Tunjung Sari