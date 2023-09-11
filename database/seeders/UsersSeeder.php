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
        //     'username' => 'arivan',
        //     'desa_id' => '1',
        //     'password' => Hash::make('123456'),
        // ]);
        DB::table('users')->insert([
            'username' => 'rama',
            'desa_id' => '3',
            'password' => Hash::make('123456'),
        ]);
    }
}
