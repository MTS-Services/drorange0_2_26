<?php

namespace App\Services;

use App\Models\Otp;
use Illuminate\Support\Facades\Log;

class OtpService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected Otp $otp)
    {
        //
    }
    
    public function generateOtp(string $phone): string
    {
        $otp = rand(100000, 999999);
        $this->otp->create([
            'otp' => $otp,
            'phone' => $phone,
            'expires_at' => now()->addMinutes(5),
        ]);
       Log::info("OTP generated for phone: " . $phone . " OTP: " . $otp);
        return $otp;
    }
    
    public function resendOtp(string $phone): string
    {
        $this->otp->where('phone', $phone)->delete();
        return $this->generateOtp($phone);
    }

    public function verifyOtp(string $otp, string $phone): bool
    {
        $otpRecord = $this->otp->where('otp', $otp)->where('phone', $phone)->first();
        if (!$otpRecord) {
            return false;
        }
        if ($otpRecord->expires_at < now()) {
            return false;
        }
        return true;
    }
}
