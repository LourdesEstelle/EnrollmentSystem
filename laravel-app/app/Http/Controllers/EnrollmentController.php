<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EnrollmentForm;

class EnrollmentController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'term' => 'required|string',
            'applicationType' => 'required|string',
            'course' => 'required|string',
            'department' => 'required|string',
            'year' => 'required|string',
        ]);

        $enrollment = EnrollmentForm::create($validatedData);

        return response()->json(['message' => 'Enrollment data saved successfully', 'data' => $enrollment]);
    }

    public function index()
    {
        $enrollments = EnrollmentForm::all();
        return response()->json($enrollments);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'term' => 'required|string',
            'applicationType' => 'required|string',
            'course' => 'required|string',
            'department' => 'required|string',
            'year' => 'required|string',
        ]);

        $enrollment = EnrollmentForm::findOrFail($id);
        $enrollment->update($validatedData);

        return response()->json(['message' => 'Enrollment data updated successfully', 'data' => $enrollment]);
    }
}
