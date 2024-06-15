<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enrollment extends Model
{
    use HasFactory;

    protected $fillable = [
        'term', 'application_type', 'year', 'department', 'course', 'first_name', 'last_name',
        'date_of_birth', 'nationality', 'civil_status', 'gender', 'address', 'province',
        'region', 'barangay', 'religion', 'mobile_number', 'email',
    ];
}
