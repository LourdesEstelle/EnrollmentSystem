<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EnrollmentForm;

class EnrollmentFormController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'term' => 'required|string',
            'applicationType' => 'required|string',
            'year' => 'required|string',
            'department' => 'required|string',
            'course' => 'required|string',
        ]);

        $enrollment = EnrollmentForm::create($validatedData);

        return response()->json(['message' => 'Enrollment data saved successfully', 'data' => $enrollment]);
    }

    public function index()
    {
        $enrollments = EnrollmentForm::all();
        return response()->json($enrollments);
    }
}

