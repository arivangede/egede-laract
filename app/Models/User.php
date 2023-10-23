<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use App\Models\Desa;
use App\Models\eNews;
use App\Models\Penduduk;
use App\Models\UserClass;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function desa()
    {
        return $this->belongsTo(Desa::class, 'desa_id');
    }
    public function enews()
    {
        return $this->hasMany(eNews::class, 'author');
    }
    public function penduduk()
    {
        return $this->belongsTo(Penduduk::class, 'nik', 'nik');
    }
    public function userclasses()
    {
        return $this->belongsTo(UserClass::class, 'kelas_id', 'id');
    }
}
