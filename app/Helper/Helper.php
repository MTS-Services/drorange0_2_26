<?php 

namespace App\Helper;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

if(!function_exists('storage_url')){
    function storage_url($path){
       
        if(!$path) return null; 

        if(Str::startsWith($path, 'http') || Str::startsWith($path, 'https')){
            return $path;
        }
        return Storage::disk('public')->url($path);
    }
}