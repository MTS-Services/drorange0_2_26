<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EstimateImage extends Model
{
    //

    public function estimate()
    {
        return $this->belongsTo(Estimate::class, 'estimate_id', 'id');
    }
}
