<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class EnrollmentController extends Controller
{
    public function index()
    {
        return Inertia::render('Enrollment', [
            'auth' => auth()->user(),
        ]);
    }
}
