<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactFaq extends Model
{
    //
    protected $fillable = [
        'question',
        'answer',
    ];
}
