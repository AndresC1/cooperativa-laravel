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
        Schema::create('movimientos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cuenta_id')->constrained('cuentas')->cascadeOnDelete()->cascadeOnUpdate();
            $table->date('fecha');
            $table->enum('tipo_movimiento', ['deposito', 'retiro']);
            $table->string('descripcion');
            $table->decimal('monto', 10, 2);
            $table->decimal('saldo', 10, 2);
            $table->enum('moneda', ['NIO', 'USD']);
            $table->string('numero_referencia')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movimientos');
    }
};
