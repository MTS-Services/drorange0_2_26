<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceType extends Model
{
    //
    protected $fillable = [
        'name', 'slug', 'price',
     ];
     
    public function options()
    {
        return $this->hasMany(Option::class, 'service_type_id', 'id');
    }

    public function dimensions()
    {
        return $this->hasMany(Diemension::class, 'service_type_id', 'id');
    }
}
