<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePaymentRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'id_user' => 'required',
            'id_tiket' => 'required',
            'id_paket' => 'required',
            'total_harga' => 'required',
            'bukti_bayar' => 'file',
            'status' => 'required',
        ];
    }
}
