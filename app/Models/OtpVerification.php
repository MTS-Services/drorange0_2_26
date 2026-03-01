<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OtpVerification extends Model
{
    //


    public function estimate()
    {
        return $this->belongsTo(Estimate::class, 'estimate_id', 'id');
    }
}
