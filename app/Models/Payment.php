<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\DB;

class Payment extends Model
{
    use HasFactory;

    protected $table = 'payments';

    protected $fillable = [
        'id_user',
        'id_tiket', // Perbaiki kolom yang digunakan untuk id tiket
        'id_paket', // Perbaiki kolom yang digunakan untuk id paket
        'total_harga',
        'bukti_bayar',
        'slug',
        'status',
    ];

    protected $casts = [
        'total_harga' => 'integer',
        'status' => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }

    public function tikets(): BelongsTo
    {
        return $this->belongsTo(Tiket::class, 'id_tiket', 'id');
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
