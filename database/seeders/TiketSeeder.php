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
            'id_user' => 1, // Ganti dengan ID User yang sesuai
            'id_paket' => 1, // Ganti dengan ID Paket yang sesuai
            'total_harga' => 100, // Harga sesuai kebutuhan
            'status' => 1, // Status sesuai kebutuhan
        ]);

        Tiket::create([
            'id_user' => 2, // Ganti dengan ID User yang sesuai
            'id_paket' => 2, // Ganti dengan ID Paket yang sesuai
            'total_harga' => 150, // Harga sesuai kebutuhan
            'status' => 2, // Status sesuai kebutuhan
        ]);

    }
}
