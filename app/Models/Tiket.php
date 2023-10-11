<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Tiket extends Model
{
    use HasFactory;

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_users', 'id');
    }

    public function pakets()

    {
        return $this->belongsToMany(Paket::class, 'pesan_pakets');
    }

    public function payments(): HasOne
    {
        return $this->hasOne(Payment::class, 'id_tiket', 'id');
    }
}
