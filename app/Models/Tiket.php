<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Tiket extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'paket_id',
        'line',
        'phone'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function paket()

    {
        return $this->belongsTo(Paket::class, 'paket_id', 'id');
    }

    public function payments()
    {
        return $this->hasMany(Payment::class, 'tiket_id', 'id');
    }
}
