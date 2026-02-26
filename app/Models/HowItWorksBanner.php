<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HowItWorksBanner extends Model
{
    protected $fillable = [
        'title',
        'subtitle',
        'additional_info',
    ];
}
