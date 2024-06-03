<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatisticsController;
use App\Http\Controllers\StudentsController; // Added StudentsController
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

// Define the route for the statistics page
Route::get('/dashboard/statistics', [StatisticsController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('statistics');

// Define the route for the students page
Route::get('/dashboard/students', [StudentsController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('students');





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

use App\Http\Controllers\EnrollmentController;

Route::get('/dashboard/enrollment', [EnrollmentController::class, 'index'])->name('enrollment.index');

use App\Http\Controllers\EnrollmentFormController;

Route::post('/enroll', [EnrollmentFormController::class, 'store']);

use App\Http\Controllers\CourseController;

Route::get('/api/courses', [CourseController::class, 'index']);


Route::get('/api/enrollments', [EnrollmentFormController::class, 'index']);

require __DIR__.'/auth.php';
