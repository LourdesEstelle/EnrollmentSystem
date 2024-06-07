<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalInfoForm extends Model
{
    use HasFactory;

    protected $fillable = [
        'Fname',
        'Lname',
        'dateOfBirth',
        'nationality',
        'civilstatus',
        'gender',
        'address',
        'province',
        'region',
        'barangay',
        'religion',
        'mobileno',
        'email'
    ];
}