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
        Schema::create('cuentas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('numero')->unique();
            $table->foreignId('user_id')->index()->constrained('users')->cascadeOnUpdate()->cascadeOnDelete();
            $table->float('saldo', 8, 2)->default(0);
            $table->boolean('estado')->default(true);
            $table->string('moneda')->default('NIO');
            $table->enum('tipo_cuenta', ["Ahorro", "Corriente"])->default('Ahorro');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cuentas');
    }
};
