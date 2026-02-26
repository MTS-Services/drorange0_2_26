<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('how_it_work_faqs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('subtitle', 500);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('how_it_work_faqs');
    }
};
