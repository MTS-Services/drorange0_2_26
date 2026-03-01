<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOptionRequest extends FormRequest
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
        $optionId = $this->route('option');
        
        return [
            'name' => ['required', 'string', 'max:255', 'unique:options,name,'.$optionId],
            'description' => ['nullable', 'string', 'max:1000'],
            'service_type_id' => ['required', 'exists:service_types,id'],
        ];
    }

    /**
     * Get custom error messages for validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'The option name is required.',
            'name.unique' => 'The option name must be unique.',
            'name.max' => 'The option name may not be greater than 255 characters.',
            'description.max' => 'The description may not be greater than 1000 characters.',
            'service_type_id.required' => 'The service type is required.',
            'service_type_id.exists' => 'The selected service type is invalid.',
        ];
    }
}
