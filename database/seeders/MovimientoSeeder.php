<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MovimientoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('movimientos')->truncate();
        DB::table('movimientos')->insert([
            [
               "cuenta_id" => 1,
               "fecha" => "2021-10-28",
               "tipo_movimiento" => "deposito",
               "descripcion" => "Saldo inicial",
               "monto" => 1000,
               "saldo" => 1000,
               "moneda" => "NIO",
               "numero_referencia" => "REF-123456789-1",
               "created_at" => "2021-10-28 17:54:32",
               "updated_at" => "2021-10-28 17:54:32"
            ],
            [
                "cuenta_id" => 2,
                "fecha" => "2021-10-28",
                "tipo_movimiento" => "deposito",
                "descripcion" => "Saldo inicial",
                "monto" => 10000,
                "saldo" => 10000,
                "moneda" => "USD",
                "numero_referencia" => "REF-987654321-1",
                "created_at" => "2021-10-28 17:54:32",
                "updated_at" => "2021-10-28 17:54:32"
            ]
        ]);
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
