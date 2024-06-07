<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonalInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personal_infos', function (Blueprint $table) {
            $table->id();
            $table->string('Fname');
            $table->string('Lname');
            $table->date('dateOfBirth');
            $table->string('nationality');
            $table->string('civilstatus');
            $table->string('gender');
            $table->string('address');
            $table->string('province');
            $table->string('region');
            $table->string('barangay');
            $table->string('religion');
            $table->string('mobileno');
            $table->string('email');


         
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personal_infos');
    }
}
