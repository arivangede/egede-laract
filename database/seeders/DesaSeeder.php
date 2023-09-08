<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DesaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('desa')->insert([
            'nama_desa' => 'Dauh Puri Kaja',
            'kecamatan' => 'Denpasar Utara',
            'kota' => 'Denpasar',
            'logo_desa' => 'dauhpurikaja'
        ]);
    }
}
