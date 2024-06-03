<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnrollmentFormsTable extends Migration
{
    public function up()
    {
        Schema::create('enrollment_forms', function (Blueprint $table) {
            $table->id();
            $table->string('term');
            $table->string('applicationType');
            $table->string('academicProgram');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('enrollment_forms');
    }
}