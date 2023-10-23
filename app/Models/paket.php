<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paket extends Model
{
    use HasFactory;

    public function tiket()
    {
        return $this->hasMany(Tiket::class, 'tiket_id', 'id');
    }
}
