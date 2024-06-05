<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/users', function () {
    return Inertia::render('Users/UserComponent');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

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

use App\Http\Controllers\PersonalInfoFormController;

Route::get('/Enrollment/PersonalInfo', [PersonalInfoFormController::class, 'index'])->name('PersonalInfo.index');

use App\Http\Controllers\PersonalInfoController;

Route::post('/personal-info', [PersonalInfoController::class, 'store']);


require __DIR__.'/auth.php';
