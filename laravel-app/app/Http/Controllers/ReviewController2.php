<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enrollment;
use App\Models\Subject;
use Illuminate\Support\Facades\Auth;

class ReviewController2 extends Controller
{
    public function index()
    {
        $userId = Auth::id();
        $enrollments = Enrollment::where('user_id', $userId)->get();

        foreach ($enrollments as $enrollment) {
            if ($enrollment->course === 'Nursing') {
                switch ($enrollment->year) {
                    case '1st year - Baccalaureate':
                        $enrollment->subjects = Subject::where('course', 'Nursing')
                                                       ->where('year', '1st year')
                                                       ->get();
                        break;
                    case '2nd year - Baccalaureate':
                        $enrollment->subjects = Subject::where('course', 'Nursing')
                                                       ->where('year', '2nd year')
                                                       ->get();
                        break;
                    // Add cases for other years as needed
                }
            }
        }

        return response()->json($enrollments);
    }
}
