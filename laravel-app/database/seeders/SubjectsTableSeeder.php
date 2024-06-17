<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('subjects')->insert([
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Subject 1'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Subject 2'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Subject 3'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Subject 4'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Subject 5'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Subject 6'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Subject 7'],
            ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Subject 8'],
            // Add more subjects as needed
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Subject 11'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Subject 12'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Subject 13'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Subject 14'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Subject 15'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Subject 16'],
            ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Subject 17'],
        ]);
    }
}
