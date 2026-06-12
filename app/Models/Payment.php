<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'tiket_id',
        'bukti_bayar',
    ];

    public function tiket()
    {
        return $this->belongsTo(Tiket::class, 'tiket_id', 'id');
    }
}
