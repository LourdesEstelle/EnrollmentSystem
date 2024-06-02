<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EnrollmentController extends Controller
{
    public function index()
    {
        // You can pass data to the view if needed
        return inertia('Enrollment', [
            'data' => 'This is the enrollment page',
        ]);
    }
}