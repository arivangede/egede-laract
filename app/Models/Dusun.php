<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Desa;

class Dusun extends Model
{
    use HasFactory;
    protected $table = "dusun";

    public function desa()
    {
        return $this->belongsTo(Desa::class, 'desa_id');
    }
    public function penduduk()
    {
        return $this->hasMany(Penduduk::class, 'dusun_id');
    }
}
