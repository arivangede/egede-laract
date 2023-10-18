<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Desa;

class Penduduk extends Model
{
    use HasFactory;
    protected $table = 'penduduk';

    public function desa()
    {
        return $this->belongsTo(Desa::class, 'desa_id');
    }
}
