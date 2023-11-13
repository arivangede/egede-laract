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
        // DB::table('users')->insert([
        //     'username' => 'dauhpurikaja',
        //     'desa_id' => '1',
        //     'password' => Hash::make('123456'),
        //     'kelas_id' => '2',
        //     'nik' => 102103104105,
        // ]);
        DB::table('users')->insert([
            'username' => 'kakekgantenk123',
            'desa_id' => '1',
            'password' => Hash::make('123456'),
            'kelas_id' => '2',
            'nik' => 123123123123,
        ]);
    }
}
