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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->foreignId('desa_id')->nullable()->constrained('desa');
            $table->string('password');
            $table->foreignId('kelas_id')->constrained('userclasses');
            $table->bigInteger('nik')->unique()->nullable();
            $table->foreign('nik')->references('nik')->on('penduduk');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['desa_id']);
            $table->dropColumn('desa_id');
        });
        Schema::dropIfExists('users');
    }
};
