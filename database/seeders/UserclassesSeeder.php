<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserclassesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('userclasses')->insert([
            'nama_kelas' => 'Walikota',
        ]);
        DB::table('userclasses')->insert([
            'nama_kelas' => 'Admin Desa',
        ]);
        DB::table('userclasses')->insert([
            'nama_kelas' => 'Masyarakat',
        ]);
    }
}
