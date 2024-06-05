<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PersonalInfo;

class PersonalInfoController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'Fname' => 'required|string',
            'Lname' => 'required|string',
            'dateOfBirth' => 'required|date',
        ]);

        $personalinfo = PersonalInfo::create($validatedData);

        return response()->json(['message' => 'Enrollment data saved successfully', 'data' => $personalinfo]);
    }

    public function index()
    {
        $personalinfo = PersonalInfo::all();
        return response()->json($personalinfo);
    }
}
