<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCurrentSetupRequest extends FormRequest
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
        $currentSetupId = $this->route('current_setup');
        
        return [
            'name' => ['required', 'string', 'max:255', 'unique:current_setups,name,'.$currentSetupId],
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
            'name.required' => 'The current setup name is required.',
            'name.unique' => 'The current setup name must be unique.',
            'name.max' => 'The current setup name may not be greater than 255 characters.',
        ];
    }
}
