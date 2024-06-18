<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubjectEnrolled extends Model
{
    use HasFactory;

    protected $table = 'subject_enrollments';

    protected $fillable = [
        'user_id',
        'enrollment_id',
        'subject_id',
    ];
}
