<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Regulasi extends Model
{
    use HasFactory;

    protected $table = 'regulasi';

    protected $fillable = ['desa_id', 'jenis', 'judul', 'deskripsi', 'author', 'file', 'tahun', 'status'];
}
