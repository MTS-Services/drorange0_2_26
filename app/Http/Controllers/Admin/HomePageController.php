<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomePageController extends Controller
{
    //

    public function __construct()
    {
        throw new \Exception('Not implemented');
    }
    public function editHeroSection()
    {
        return Inertia::render('Admin/ManagePage/HomePage/EditHeroSection');
    }
}
