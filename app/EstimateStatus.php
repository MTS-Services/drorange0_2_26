<?php

namespace App;

enum EstimateStatus: string
{
    case Pending = 'pending';
    case Review = 'review';
    case Estimate = 'estimate';

    public function getLabel(): string
    {
        return match($this) {
            self::Pending => 'Pending',
            self::Review => 'Review',
            self::Estimate => 'Estimate',
        };
    }

    public function getColor(): string
    {
        return match($this) {
            self::Pending => 'yellow',
            self::Review => 'blue',
            self::Estimate => 'green',
        };
    }
}
