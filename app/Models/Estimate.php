<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Estimate extends Model
{
    protected $fillable = [
        'estimate_id',
        'service_type_id',
        'option_ids',
        'bathroom_size',
        'current_setup_id',
        'otp_verification_at',
        'estimate_status',

        'first_name',
        'last_name',
        'email',
        'phone',
        'address',
        'city',
        'zip',
    ];

    public function EstimateImage()
    {
        return $this->hasMany(EstimateImage::class, 'estimate_id', 'id');
    }

    public function estimateImages()
    {
        return $this->hasMany(EstimateImage::class, 'estimate_id', 'id');
    }

    public function otpVerification()
    {
        return $this->hasOne(OtpVerification::class, 'estimate_id', 'id');
    }

    public function contactInformation()
    {
        return $this->hasOne(ContactInformation::class, 'estimate_id', 'id');
    }

    public function estimateStatuses()
    {
        return $this->hasMany(EstimateStatus::class, 'estimate_id', 'id');
    }

    public function latestStatus()
    {
        return $this->hasOne(EstimateStatus::class, 'estimate_id', 'id')->latest();
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
