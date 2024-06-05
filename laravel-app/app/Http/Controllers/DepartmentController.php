<?php

namespace App\Http\Controllers;

use App\Models\Department; // Import the Department model
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function index()
    {
        // Retrieve department data
        $departments = Department::all();

        // Return the view with department data
        return inertia('Department/Index', [
            'departments' => $departments,
        ]);
    }
}
