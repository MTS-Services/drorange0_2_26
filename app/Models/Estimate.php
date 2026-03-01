<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Estimate extends Model
{
    protected $fillable = [
        'estimate_id',
        'service_type_id',
        'option_id',
        'diemension_id',
        'current_setup_id',
        'otp_verification_at',
    ];

    public function EstimateImage()
    {
        return $this->hasMany(EstimateImage::class, 'estimate_id', 'id');
    }

    public function otpVerification()
    {
        return $this->hasOne(OtpVerification::class, 'estimate_id', 'id');
    }

    public function serviceType()
    {
        return $this->belongsTo(ServiceType::class, 'service_type_id', 'id');
    }

    public function option()
    {
        return $this->belongsTo(Option::class, 'option_id', 'id');
    }

    public function diemension()
    {
        return $this->belongsTo(Diemension::class, 'diemension_id', 'id');
    }

    public function currentSetup()
    {
        return $this->belongsTo(CurrentSetup::class, 'current_setup_id', 'id');
    }
}
