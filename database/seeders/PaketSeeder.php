<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Paket;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PaketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Paket::create([
            'nama_paket'=>'Early Bird',
            'detail_paket'=>'1x Main Event Ticket',
            'harga' => 85000
        ]);
    }
}
