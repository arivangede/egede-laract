<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KTP extends Model
{
    use HasFactory;

    protected $table = 'ktp';
    protected $fillable = [
        'nik',
        'file',
        'file_name'
    ];

    public function penduduk()
    {
        return $this->belongsTo(Penduduk::class, 'nik');
    }
}
