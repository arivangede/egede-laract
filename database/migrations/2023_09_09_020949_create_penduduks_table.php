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
            $table->bigInteger('no_kk')->index();
            $table->string('kepala_keluarga')->nullable();
            $table->string('nama');
            $table->bigInteger('nik')->unique()->index();
            $table->string('jenis_kelamin');
            $table->string('tempat_lahir');
            $table->date('tanggal_lahir');
            $table->string('alamat');
            $table->foreignId('dusun_id')->nullable()->constrained('dusun');
            $table->foreignId('desa_id')->constrained('desa');
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
