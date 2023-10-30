<?php

namespace App\Http\Requests\Transaction;

use Illuminate\Foundation\Http\FormRequest;

class TransaccionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "cuenta_origen" => "required|exists:cuentas,numero",
            "cuenta_destino" => "required|exists:cuentas,numero",
            "monto" => "required|numeric|min:1",
            "moneda" => "required|string|max:3|in:USD,NIO",
            "descripcion" => "required|string|max:255",
        ];
    }
}
