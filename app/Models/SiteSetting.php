<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use function App\Helper\storage_url;

class SiteSetting extends Model
{
    //

    protected $fillable = [
        'site_name',
        'site_title',
        'site_logo',
        'site_favicon'
    ];

    protected $casts = [
        'id' => 'integer',
    ];

    protected $appends = [
        'site_logo_url',
        'site_favicon_url'
    ];

    public function getSiteLogoUrlAttribute($value)
    {
        return storage_url($this->attributes['site_logo']);
    }
    
    public function getSiteFaviconUrlAttribute($value)
    {
        return storage_url($this->attributes['site_favicon']);
    }
}
