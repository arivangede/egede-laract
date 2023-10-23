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
            'no_kk' => '1234567891234567',
            'nama' => 'Putu Asgardian',
            'nik' => 123456,
            'jenis_kelamin' => 'laki-laki',
            'tempat_lahir' => 'Planet Namek',
            'tanggal_lahir' => '2000-10-23',
            'alamat' => 'jalan jalan di bali cakeepp',
            'desa_id' => 1,
            'kecamatan' => 'Denpasar Selatan Agak Kiri Dikit',
            'kota' => 'Denpasar',
            'provinsi' => 'Bali',
            'no_hp' => '0',
            'stt_nikah' => 'nikah 10 kali tapi gagal dikit ga ngaruh',
            'agama' => '5',
            'suku_bangsa' => 'Alien',
            'kewarganegaraan' => 'WNI',
            'pendidikan_terakhir' => 'S22 Pro',
            'pekerjaan' => 'PNS',
            'penghasilan' => '999999999',
        ]);
    }
}
