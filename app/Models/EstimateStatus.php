<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EstimateStatus extends Model
{
    protected $fillable = [
        'estimate_id',
        'estimate_status',
        'message',
    ];

    public function estimate()
    {
        return $this->belongsTo(Estimate::class, 'estimate_id', 'id');
    }
}
