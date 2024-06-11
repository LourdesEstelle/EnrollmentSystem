<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EnrollmentForm;
use Illuminate\Support\Facades\Log;

class EnrollmentFormController extends Controller
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

        try {
            $enrollment = EnrollmentForm::findOrFail($id);
            $enrollment->update($validatedData);

            return response()->json(['message' => 'Enrollment data updated successfully', 'data' => $enrollment]);
        } catch (\Exception $e) {
            Log::error('Error updating enrollment: ' . $e->getMessage());
            return response()->json(['message' => 'Error updating enrollment data'], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $enrollment = EnrollmentForm::findOrFail($id);
            $enrollment->delete();

            return response()->json(['message' => 'Enrollment data deleted successfully']);
        } catch (\Exception $e) {
            Log::error('Error deleting enrollment: ' . $e->getMessage());
            return response()->json(['message' => 'Error deleting enrollment data'], 500);
        }
    }
}
