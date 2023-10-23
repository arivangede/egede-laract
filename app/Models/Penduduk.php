<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Desa;
use App\Models\User;

class Penduduk extends Model
{
    use HasFactory;
    protected $table = 'penduduk';

    public function desa()
    {
        return $this->belongsTo(Desa::class, 'desa_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'nik');
    }
}
