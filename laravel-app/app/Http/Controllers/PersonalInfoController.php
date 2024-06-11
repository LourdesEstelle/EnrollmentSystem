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
            'nationality' => 'required|string',
            'civilstatus' => 'required|string',
            'gender' => 'required|string',
            'address' => 'required|string',
            'province' => 'required|string',
            'region' => 'required|string',
            'barangay' => 'required|string',
            'religion' => 'required|string',
            'mobileno' => 'required|string',
            'email' => 'required|string',
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
