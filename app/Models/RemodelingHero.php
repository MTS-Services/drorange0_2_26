<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use function App\Helper\storage_url;

class RemodelingHero extends Model
{
    protected $fillable = [
        'title',
        'subtitle',
        'button1_text',
        'button1_url',
        'button2_text',
        'button2_url',
        'background_image',
        'aditional_information',
    ];

    protected $appends = [
        'background_image_url',
    ];

    public function getBackgroundImageUrlAttribute(): ?string
    {
        $path = $this->attributes['background_image'] ?? null;

        return $path ? storage_url($path) : null;
    }
}
