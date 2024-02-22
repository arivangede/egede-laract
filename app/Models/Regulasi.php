<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Regulasi extends Model
{
    use HasFactory;

    protected $table = 'regulasi';

    protected $fillable = ['desa_id', 'jenis', 'no_regulasi', 'tentang', 'author', 'file_name', 'file_path', 'tahun', 'status'];

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->diffForHumans();
    }
}
