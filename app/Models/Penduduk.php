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
    protected $fillable = [
        'tempat_lahir',
        'tanggal_lahir',
        'jenis_kelamin',
        'agama',
        'suku_bangsa',
        'kewarganegaraan',
        'pendidikan_terakhir',
        'pekerjaan',
        'penghasilan',
        'alamat',
        'dusun',
        'no_hp',
        'foto'
    ];

    public function desa()
    {
        return $this->belongsTo(Desa::class, 'desa_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'nik');
    }
    public function dusun()
    {
        return $this->belongsTo(Dusun::class, 'dusun_id');
    }
}
