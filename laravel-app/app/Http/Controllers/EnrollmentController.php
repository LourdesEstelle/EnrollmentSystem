<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class EnrollmentController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        return Inertia::render('Enrollment', [
            'auth' => [
                'user' => $user,
            ],
        ]);
    }
}
