<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use function App\Helper\storage_url;

class HomeService extends Model
{
    //
    protected $fillable = [ 
        'title',
        'subtitle',
        'icon',
    ];

    protected $appends = ['icon_url'];
    
    public function getIconUrlAttribute($value)
    {
        storage_url($this->attributes['icon']);
    }
}
