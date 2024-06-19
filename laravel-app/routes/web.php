<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatisticsController;
use App\Http\Controllers\StudentsController; 
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\EnrollmentFormController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PersonalInfoFormController;
use App\Http\Controllers\PersonalInfoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Define the route for the welcome page
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Define routes that require authentication
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard/statistics', [StatisticsController::class, 'index'])->name('statistics');
    Route::get('/dashboard/enrollment_view', [StatisticsController::class, 'index'])->name('enrollment_view');
    Route::get('/dashboard/department', [DepartmentController::class, 'index'])->name('department');
    Route::get('/dashboard/students_view', [StudentsController::class, 'index'])->name('students_view');
    Route::get('/dashboard/students_profile', [StudentsController::class, 'index'])->name('students_profile');
    Route::get('/dashboard/enrollment', [EnrollmentController::class, 'index'])->name('enrollment.index');
    Route::get('/dashboard/courses', [CourseController::class, 'index']);
    Route::get('/dashboard/payment', [PaymentController::class, 'index']);
    Route::get('/dashboard/payment/list', [PaymentController::class, 'paymentList']);
    Route::get('/dashboard/payment/summary', [PaymentController::class, 'paymentSummary']);
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

// Define profile routes that require authentication
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Define enrollment-related routes
Route::post('/enroll', [EnrollmentFormController::class, 'store']);
Route::get('/api/enrollments', [EnrollmentFormController::class, 'index']);
Route::put('/api/enrollment-forms/{id}', [EnrollmentFormController::class, 'update']);
Route::delete('/api/enrollment-forms/{id}', [EnrollmentFormController::class, 'destroy']);

// Define personal information-related routes
Route::get('/Enrollment/PersonalInfo', [PersonalInfoFormController::class, 'index'])->name('PersonalInfo.index');
Route::post('/personal-info', [PersonalInfoController::class, 'store']);
Route::get('/personal_view', [PersonalInfoController::class, 'index']);

// Define the route for the users page
Route::get('/users', function () {
    return Inertia::render('Users/UserComponent');
})->middleware(['auth', 'verified']);

// Include authentication routes
require __DIR__.'/auth.php';
