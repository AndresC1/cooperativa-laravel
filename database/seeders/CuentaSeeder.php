<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CuentaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('cuentas')->truncate();
        DB::table('cuentas')->insert([
            [
                'nombre' => 'Cuenta de Ahorro',
                'numero' => '123456789',
                'user_id' => 1,
                'saldo' => 1000,
                'estado' => true,
                'moneda' => 'NIO',
                'tipo_cuenta' => 'Ahorro',
                'created_at' => '2021-10-28 17:54:32',
                'updated_at' => '2021-10-28 17:54:32',
            ],
            [
                'nombre' => 'Cuenta de Ahorro',
                'numero' => '987654321',
                'user_id' => 1,
                'saldo' => 10000,
                'estado' => true,
                'moneda' => 'USD',
                'tipo_cuenta' => 'Ahorro',
                'created_at' => '2021-10-28 17:54:32',
                'updated_at' => '2021-10-28 17:54:32',
            ]
        ]);
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
