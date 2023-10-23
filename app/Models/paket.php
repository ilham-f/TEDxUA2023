<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paket extends Model
{
    use HasFactory;
    protected $fillable = [
        'nama_paket', // Add 'nama_paket' to the fillable attributes
        'detail_paket',
        'kuota',
        'harga',
        'image',
    ];

    public function tiket()
    {
        return $this->hasMany(Tiket::class, 'tiket_id', 'id');
    }
}
