<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatisticsController;
use App\Http\Controllers\StudentsController; 
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\EnrollmentFormController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\PaymentController;
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
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard/statistics', [StatisticsController::class, 'index'])->name('statistics');
});
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
Route::get('/dashboard/enrollment', [EnrollmentController::class, 'index'])->name('enrollment.index');



// new era 

Route::get('/enroll', [EnrollmentFormController::class, 'index']);
Route::post('/enroll', [EnrollmentFormController::class, 'store']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware(['auth'])->group(function () {
    Route::get('/enroll', [EnrollmentController::class, 'showEnrollmentForm'])->name('enroll.form');
});




require __DIR__.'/auth.php';
