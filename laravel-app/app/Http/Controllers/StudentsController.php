<?php

// app/Http/Controllers/StudentsController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentsController extends Controller
{
    public function index()
    {
        return Inertia::render('Students', [
            'auth' => auth()->user(),
        ]);
    }
}    