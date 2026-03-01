<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Diemension extends Model
{
    protected $fillable = [
        'name',
        'service_type_id',
    ];

    public function serviceType()
    {
        return $this->belongsTo(ServiceType::class, 'service_type_id', 'id');
    }
}
