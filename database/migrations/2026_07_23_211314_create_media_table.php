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
    Schema::create('media', function (Blueprint $table) {

        $table->id();

        // Relation polymorphique
        $table->morphs('mediable');

        // Chemin du fichier
        $table->string('path');

        // Texte alternatif
        $table->string('alt')->nullable();

        // Ordre d'affichage
        $table->unsignedInteger('sort_order')->default(0);

        // Image principale
        $table->boolean('is_cover')->default(false);

        $table->timestamps();
    });
}
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('media');
    }
};
