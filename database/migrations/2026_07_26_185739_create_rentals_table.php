<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rentals', function (Blueprint $table) {

            $table->id();

            // Informations
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('subtitle')->nullable();
            $table->text('description')->nullable();

            // Classification
            $table->string('category')->nullable();

            // Média
            $table->string('cover_image')->nullable();

            // Tarif
            $table->decimal('price', 8, 2);

            // Gestion des prims
            $table->unsignedInteger('prims_allowed')->default(0);
            $table->unsignedInteger('prims_remaining')->default(0);

            // Location
            $table->unsignedInteger('rental_duration')->default(60); // en minutes
            $table->unsignedInteger('rental_time_remaining')->default(0);

            // Statut
            $table->enum('status', [
                'available',
                'rented',
                'pending'
            ])->default('available');

            // Administration
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('published')->default(false);

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rentals');
    }
};