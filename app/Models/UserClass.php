<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserClass extends Model
{
    use HasFactory;
    protected $table = 'userclasses';
    public function user()
    {
        return $this->hasMany(User::class, 'kelas_id', 'id');
    }
}
