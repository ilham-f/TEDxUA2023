<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\DB;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'tiket_id',
    ];

    public function tikets()
    {
        return $this->belongsTo(Tiket::class, 'tiket_id', 'id');
    }

    public function pakets(): BelongsTo
    {
        return $this->belongsTo(Paket::class, 'id_paket', 'id');
    }

    public static function alldatapayments()
    {
        // Sintaks SQL yang digunakan harus sesuai dengan skema tabel Anda
        // Jika perlu, sesuaikan sesuai dengan struktur tabel yang sesungguhnya
        return DB::table('payments')
            ->leftjoin('tikets', 'tikets.id', '=', 'payments.id_tiket')
            ->leftjoin('users', 'users.id', '=', 'payments.id_user')
            ->leftjoin('pakets', 'pakets.id', '=', 'payments.id_paket')
            ->get();
    }
}
