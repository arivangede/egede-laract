<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Desa;
use App\Models\User;
use Illuminate\Support\Carbon;

class eNews extends Model
{
    protected $table = 'enews';

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->diffForHumans();
    }

    public function desa()
    {
        return $this->belongsTo(Desa::class, 'desa_id');
    }
    public function users()
    {
        return $this->belongsTo(User::class, 'author');
    }

    public function likes()
    {
        return $this->hasMany(Like::class, 'enews_id');
    }

    public function likesCount()
    {
        return $this->likes()->count();
    }
}
