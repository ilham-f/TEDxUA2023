<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PembayaranSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $payments = [
            "What makes you different from everyone nowadays in this evolving world?",
            "What makes you unique in ways that you think are uncommon these days?",
            "How do you maintain your self-stance in the midst of people’s expectations?",
            "What's a lesson from your family that helped you get though hard times?",
            "What is something that your family said/did that affects your confidence and insecurity until now?",
            "What childhood experience has affected your confidence and insecurity until now?",
            "What was the dream you didn’t achieve because of your family?",
            "Are your plans for the future in line with your parents' plans?",
            "What is something you wanted to say to your family for a long time?",
            "Does your home actually feel like home?"
        ];

        foreach ($payments as $payment) {
            DB::table('payments')->insert([
                'bukti_bayar' => $payment,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
