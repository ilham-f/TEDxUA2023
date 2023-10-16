<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            ['name'=>'User',
            'email'=>'user@gmail.com',
            'password'=> bcrypt('123456'),
            'role' => 'user'
            ],
            ['name'=>'Admin',
            'email'=>'admin@gmail.com',
            'password'=> bcrypt('123456'),
            'role' => 'admin'
            ],
        ];
        foreach ($users as $user)
        {
            User::create($user);
        }
    }
}
