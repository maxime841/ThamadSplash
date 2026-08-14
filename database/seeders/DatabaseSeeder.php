<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use RuntimeException;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        $email = env('ADMIN_EMAIL');
        $password = env('ADMIN_PASSWORD');

        if (! $email || ! $password) {
            throw new RuntimeException(
                'ADMIN_EMAIL et ADMIN_PASSWORD doivent être définis.'
            );
        }

        User::updateOrCreate(
            ['email' => $email],
            [
                'name' => 'Maxime',
                'password' => Hash::make($password),
                'role' => 'super-admin',
            ]
        );
    }
}