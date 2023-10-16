<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('penduduk', function (Blueprint $table) {
            $table->id();
            $table->string('no_kk');
            $table->string('kepala_keluarga')->nullable();
            $table->string('nama');
            $table->bigInteger('nik');
            $table->string('jenis_kelamin');
            $table->string('tempat_lahir');
            $table->date('tanggal_lahir');
            $table->string('alamat');
            $table->string('dusun')->nullable();
            $table->foreignId('desa')->constrained('desa');
            $table->string('kecamatan');
            $table->string('kota');
            $table->string('provinsi');
            $table->string('no_hp');
            $table->string('stt_nikah');
            $table->string('agama');
            $table->string('suku_bangsa');
            $table->string('kewarganegaraan');
            $table->string('pendidikan_terakhir');
            $table->string('pekerjaan');
            $table->string('penghasilan');
            $table->string('foto')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('penduduks');
    }
};
