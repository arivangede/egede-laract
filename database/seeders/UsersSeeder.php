<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'username' => 'dauhpurikaja',
            'desa_id' => '1',
            'password' => Hash::make('123456'),
            'kelas_id' => '1',
            'nik' => 102103104105,
            'email' => 'arivan.gede@gmail.com',
            'no_hp' => '+6281353618918',
        ]);
        DB::table('users')->insert([
            'username' => 'tuedi',
            'desa_id' => '1',
            'password' => Hash::make('123456'),
            'kelas_id' => '2',
            'nik' => 142143144145,
            'email' => 'bgd.tech0505@gmail.com',
            'no_hp' => '+628123456789',
        ]);
    }
}
