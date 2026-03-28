<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class EstimateImage extends Model
{
    //

    public function estimate()
    {
        return $this->belongsTo(Estimate::class, 'estimate_id', 'id');
    }

    protected $fillable = [
        'estimate_id',
        'image',
    ];

    public function getImageUrlAttribute()
    {


        if(Str::startsWith($this->image, 'http') || Str::startsWith($this->image, 'https')){
            return $this->image;
        }
        return Storage::disk('public')->url($this->image);
    }
    
    protected $appends = ['image_url'];
}

