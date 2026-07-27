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
        Schema::create('schools', function (Blueprint $table) {

            $table->id();

            // Informations
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('subtitle')->nullable();
            $table->text('description');

            // Classification
            $table->string('category')->nullable();

            // Média
            $table->string('cover_image')->nullable();

            // Tarification
            $table->decimal('price', 8, 2)->nullable();

            // Organisation
            $table->string('duration')->nullable();
            $table->unsignedInteger('capacity')->nullable();

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
        Schema::dropIfExists('schools');
    }
};