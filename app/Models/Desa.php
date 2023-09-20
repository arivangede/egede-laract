<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\eNews;

class Desa extends Model
{
    protected $table = 'desa';
    public function users()
    {
        return $this->hasMany(User::class, 'desa_id');
    }

    public function news()
    {
        return $this->hasMany(eNews::class, 'desa_id');
    }
}
