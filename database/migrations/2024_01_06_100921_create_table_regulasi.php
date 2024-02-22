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
        Schema::create('regulasi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('desa_id')->constrained('desa');
            $table->string('jenis');
            $table->string('no_regulasi');
            $table->string('tentang');
            $table->foreignId('author')->constrained('users');
            $table->string('tahun');
            $table->string('status');
            $table->string('file_name');
            $table->string('file_path');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_regulasi');
    }
};
