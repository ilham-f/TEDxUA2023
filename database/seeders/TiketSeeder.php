<?php

namespace Database\Seeders;

use App\Models\paket;
use App\Models\Tiket;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TiketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Tiket::create([
            'user_id' => 1, // Ganti dengan ID User yang sesuai
            'paket_id' => 1, // Ganti dengan ID Paket yang sesuai
            'status' => 1, // Status sesuai kebutuhan
            'line' => 'if',
            'phone' => '123'
        ]);

        Tiket::create([
            'user_id' => 1, // Ganti dengan ID User yang sesuai
            'paket_id' => 1, // Ganti dengan ID Paket yang sesuai
            'status' => 2, // Status sesuai kebutuhan
            'line' => 'ife',
            'phone' => '123'
        ]);

    }
}
