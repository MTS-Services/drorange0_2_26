<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStayInformedRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['required', 'string', 'max:255'],
            'icon' => ['nullable', 'file', 'image', 'max:2048'],
            'delete_existing_icon' => ['nullable', 'boolean'],
        ];
    }
}
