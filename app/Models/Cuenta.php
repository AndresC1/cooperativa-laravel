<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cuenta extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'numero',
        'user_id',
        'saldo',
        'estado',
        'moneda',
        'tipo_cuenta',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function movimientos()
    {
        return $this->hasMany(Movimiento::class, 'cuenta_id');
    }
}
