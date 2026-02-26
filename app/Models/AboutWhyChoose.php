<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use function App\Helper\storage_url;

class AboutWhyChoose extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subtitle',
        'icon',
    ];

    protected $appends = ['icon_url'];

    public function getIconUrlAttribute(): ?string
    {
        return storage_url($this->attributes['icon'] ?? null);
    }
}
