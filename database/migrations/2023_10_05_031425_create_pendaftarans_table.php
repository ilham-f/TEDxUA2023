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
        Schema::create('pendaftarans', function (Blueprint $table) {
            $table->id();
            $table->string('akun_ig');
            $table->string('kontak');
            $table->string('link_gdrive');
            $table->string('metode_bayar', 45);
            $table->integer('status');
            $table->timestamps();
            $table->bigInteger('event_id');
            $table->bigInteger('peserta_id');
            $table->bigInteger('paket_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pendaftarans');
    }
};
