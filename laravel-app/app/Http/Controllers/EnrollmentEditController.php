<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use Illuminate\Http\Request;

class EnrollmentEditController extends Controller
{
    public function index()
    {
        return Enrollment::all();
    }

    public function destroy($id)
    {
        $enrollment = Enrollment::find($id);
        if ($enrollment) {
            $enrollment->delete();
            return response()->json(['message' => 'Enrollment deleted successfully']);
        } else {
            return response()->json(['message' => 'Enrollment not found'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $enrollment = Enrollment::find($id);
        if ($enrollment) {
            $enrollment->update($request->all());
            return response()->json(['message' => 'Enrollment updated successfully']);
        } else {
            return response()->json(['message' => 'Enrollment not found'], 404);
        }
    }
}
