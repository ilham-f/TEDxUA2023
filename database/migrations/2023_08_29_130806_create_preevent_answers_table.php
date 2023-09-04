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
        Schema::create('preevent_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('preevent_question_id')->constrained('preevent_questions')->onDelete('cascade');
            $table->string("answer");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('preevent_answers');
    }
};
