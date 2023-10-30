<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movimiento extends Model
{
    use HasFactory;

    protected $fillable = [
        'cuenta_id',
        'fecha',
        'tipo_movimiento',
        'descripcion',
        'monto',
        'saldo',
        'moneda',
        'numero_referencia',
    ];

    public function cuenta()
    {
        return $this->belongsTo(Cuenta::class, 'cuenta_id');
    }
}
