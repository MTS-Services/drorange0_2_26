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
        Schema::create('estimates', function (Blueprint $table) {
            $table->id();
            $table->string('estimate_id', 255)->unique();
            $table->unsignedBigInteger('service_type_id');
            $table->unsignedBigInteger('option_id');
            $table->unsignedBigInteger('diemension_id');
            $table->unsignedBigInteger('current_setup_id');
            $table->dateTime('otp_verification_at')->nullable();
            $table->foreign('service_type_id')->references('id')->on('service_types')->onDelete('cascade');
            $table->foreign('option_id')->references('id')->on('options')->onDelete('cascade');
            $table->foreign('diemension_id')->references('id')->on('diemensions')->onDelete('cascade');
            $table->foreign('current_setup_id')->references('id')->on('current_setups')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estimates');
    }
};
