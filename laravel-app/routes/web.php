<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatisticsController;
use App\Http\Controllers\StudentsController; 
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\EnrollmentFormController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\PayController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PaymentsController;
use App\Http\Controllers\PersonalInfoFormController;
use App\Http\Controllers\PersonalInfoController;
use App\Models\Courses;
use App\Models\Payment;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\StudentController;

// Define the route for the welcome page
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Define the route for the statistics page
Route::get('/dashboard/statistics', [StatisticsController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('statistics');
// Define the route for the Department page
Route::get('/dashboard/department', [DepartmentController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('department');

// Define the route for the students page
Route::get('/dashboard/students_view', [StudentsController::class, 'index'])->name('students_view');
Route::get('/dashboard/students_profile', [StudentsController::class, 'index'])->name('students_profile');


// Define the route for the users page
Route::get('/users', function () {
    return Inertia::render('Users/UserComponent');
})->middleware(['auth', 'verified']);

// Define the route for the dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Group routes that require authentication
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Define the route for retrieving payment


// Define the route for the enrollment page
Route::get('/dashboard/enrollment', [EnrollmentControler::class, 'index'])->name('enrollment.index');

// Define the route for the enrollment form submission
Route::post('/enroll', [EnrollmentFormController::class, 'store']);

// Define the route for retrieving courses
Route::get('/dashboard/courses', [CourseController::class, 'index']);

Route::get('/dashboard/payment', [PaymentController::class, 'index']);


// Define the route for retrieving enrollments
Route::get('/enrollments', [EnrollmentFormController::class, 'index']);

// Define the route for the personal info form
Route::get('/Enrollment/PersonalInfo', [PersonalInfoFormController::class, 'index'])->name('PersonalInfo.index');

// Define the route for storing personal info
Route::post('/personal-info', [PersonalInfoController::class, 'store']);

Route::get('/personal_view', [PersonalInfoController::class, 'index']);


// UY SI HEV ABIIIII 


Route::post('/enroll', [EnrollmentFormController::class, 'store']);
Route::get('/api/enrollments', [EnrollmentFormController::class, 'index']);
Route::put('/api/enrollment-forms/{id}', [EnrollmentFormController::class, 'update']);





require __DIR__.'/auth.php';
