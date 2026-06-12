<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paket extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_paket',
        'detail_paket',
        'kuota',
        'harga',
        'image',
    ];

    public function tikets()
    {
        return $this->hasMany(Tiket::class, 'paket_id', 'id');
    }
}
