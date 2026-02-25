<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomePageHero extends Model
{
    //
    protected $fillable = [ 
        'title',
        'subtitle',
        'button1_text',
        'button1_url',
        'button2_text',
        'button2_url',
        'overlay_color',
        'background_image',
        'aditional_information'
    ];
}
