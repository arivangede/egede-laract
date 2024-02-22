<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class PendudukSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('penduduk')->insert([
            'no_kk' => '10000000000000',
            'kepala_keluarga' => '123123123123',
            'nama' => 'Wayan Odin Allfather',
            'nik' => 123123123123,
            'jenis_kelamin' => 'laki-laki',
            'tempat_lahir' => 'Denpasar',
            'tanggal_lahir' => '1970-05-8',
            'alamat' => 'Jl. di Denpasar',
            'desa_id' => 1,
            'stt_nikah' => 'kawin',
            'agama' => 'Hindu',
            'suku_bangsa' => 'Bali',
            'kewarganegaraan' => 'WNI',
            'pendidikan_terakhir' => 'tidak sekolah',
            'pekerjaan' => 'Petani',
            'penghasilan' => '999999999',
        ]);
        DB::table('penduduk')->insert([
            'no_kk' => '10000000000000',
            'kepala_keluarga' => '123123123123',
            'nama' => 'Putu Frigga',
            'nik' => 133134135136,
            'jenis_kelamin' => 'perempuan',
            'tempat_lahir' => 'Denpasar',
            'tanggal_lahir' => '1972-12-30',
            'alamat' => 'Jl. di Denpasar',
            'desa_id' => 1,
            'stt_nikah' => 'kawin',
            'agama' => 'Hindu',
            'suku_bangsa' => 'Bali',
            'kewarganegaraan' => 'WNI',
            'pendidikan_terakhir' => 'tidak sekolah',
            'pekerjaan' => 'ibu rumah tangga',
            'penghasilan' => '999999999',
        ]);
        DB::table('penduduk')->insert([
            'no_kk' => '10000000000000',
            'kepala_keluarga' => '123123123123',
            'nama' => 'Putu Hela Odinson',
            'nik' => 112113114115,
            'jenis_kelamin' => 'perempuan',
            'tempat_lahir' => 'Denpasar',
            'tanggal_lahir' => '1985-12-19',
            'alamat' => 'Jl. di Denpasar',
            'desa_id' => 1,
            'stt_nikah' => 'tidak kawin',
            'agama' => 'Hindu',
            'suku_bangsa' => 'Bali',
            'kewarganegaraan' => 'WNI',
            'pendidikan_terakhir' => 'S3/Sederajat',
            'pekerjaan' => 'PNS',
            'penghasilan' => '999999999',
        ]);
        DB::table('penduduk')->insert([
            'no_kk' => '10000000000000',
            'kepala_keluarga' => '123123123123',
            'nama' => 'Putu Gede Thor Odinson',
            'nik' => 102103104105,
            'jenis_kelamin' => 'laki-laki',
            'tempat_lahir' => 'Denpasar',
            'tanggal_lahir' => '1999-10-23',
            'alamat' => 'Jl. di Denpasar',
            'desa_id' => 1,
            'stt_nikah' => 'Duda/Janda',
            'agama' => 'Hindu',
            'suku_bangsa' => 'Bali',
            'kewarganegaraan' => 'WNI',
            'pendidikan_terakhir' => 'S1/Sederajat',
            'pekerjaan' => 'PNS',
            'penghasilan' => '999999999',
        ]);
        DB::table('penduduk')->insert([
            'no_kk' => '10000000000000',
            'kepala_keluarga' => '123123123123',
            'nama' => 'Kadek Loki Odinson',
            'nik' => 142143144145,
            'jenis_kelamin' => 'laki-laki',
            'tempat_lahir' => 'Denpasar',
            'tanggal_lahir' => '2003-08-19',
            'alamat' => 'Jl. di Denpasar',
            'desa_id' => 1,
            'stt_nikah' => 'tidak kawin',
            'agama' => 'Hindu',
            'suku_bangsa' => 'Bali',
            'kewarganegaraan' => 'WNI',
            'pendidikan_terakhir' => 'tidak sekolah',
            'pekerjaan' => 'tidak bekerja',
            'penghasilan' => '999999999',
        ]);
    }
}
