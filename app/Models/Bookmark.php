<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookmark extends Model
{
    use HasFactory;

    protected $table = 'bookmarks';
    protected $fillable = ['enews_id', 'user_id'];

    public function enews()
    {
        return $this->belongsTo(eNews::class, 'enews_id');
    }
    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
