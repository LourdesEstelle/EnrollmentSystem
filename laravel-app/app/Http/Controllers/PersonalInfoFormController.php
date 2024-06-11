<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonalInfoFormController extends Controller
{
    public function index()
    {
        // You can pass data to the view if needed
        return inertia('PersonalInfo', [
            'data' => 'This is the enrollment page',
        ]);
    }
}