<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('subjects')->insert([

        
            
                ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Introduction to Information Technology IT101'],
                ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Fundamentals of Programming IT102'],
                ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Digital Logic Design IT103'],
                ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Discrete Mathematics IT104'],
                ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Computer Networks IT105'],
                ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Database Management Systems IT106'],
                ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Web Technologies IT107'],
                ['course' => 'Information Technology', 'year' => '1st year', 'subject_name' => 'Introduction to Data Science IT108'],
            
                ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Object-Oriented Programming IT201'],
                ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Data Structures and Algorithms IT202'],
                ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Software Engineering IT203'],
                ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Operating Systems IT204'],
                ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Computer Architecture IT205'],
                ['course' => 'Information Technology', 'year' => '2nd year', 'subject_name' => 'Human-Computer Interaction IT206'],
            
                ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Machine Learning IT301'],
                ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Artificial Intelligence IT302'],
                ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Cyber Security IT303'],
                ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Cloud Computing IT304'],
                ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Internet of Things IT305'],
                ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Data Analytics IT306'],
                ['course' => 'Information Technology', 'year' => '3rd year', 'subject_name' => 'Big Data Technologies IT307'],
            
                ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Advanced Database Systems IT401'],
                ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Blockchain Technology IT402'],
                ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Quantum Computing IT403'],
                ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Natural Language Processing IT404'],
                ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Computer Vision IT405'],
                ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Ethical Hacking IT406'],
                ['course' => 'Information Technology', 'year' => '4th year', 'subject_name' => 'Capstone Project IT407'],
            
            
            // Nursing
            
                ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Anatomy and Physiology NUR101'],
                ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Fundamentals of Nursing NUR102'],
                ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Nutrition and Dietetics NUR103'],
                ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Biochemistry NUR104'],
                ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Nursing Foundations NUR105'],
                ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Microbiology NUR106'],
                ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'Psychology NUR107'],
                ['course' => 'Nursing', 'year' => '1st year', 'subject_name' => 'English NUR108'],
            
                ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Medical-Surgical Nursing NUR201'],
                ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Pharmacology NUR202'],
                ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Pathology NUR203'],
                ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Community Health Nursing NUR204'],
                ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Sociology NUR205'],
                ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Communication and Educational Technology NUR206'],
                ['course' => 'Nursing', 'year' => '2nd year', 'subject_name' => 'Environmental Studies NUR207'],
            
                ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Child Health Nursing NUR301'],
                ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Mental Health Nursing NUR302'],
                ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Nursing Research and Statistics NUR303'],
                ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Medical-Surgical Nursing II NUR304'],
                ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Midwifery and Obstetrical Nursing NUR305'],
                ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Management of Nursing Services and Education NUR306'],
                ['course' => 'Nursing', 'year' => '3rd year', 'subject_name' => 'Elective Course NUR307'],
            
                ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Advanced Nursing Practice NUR401'],
                ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Critical Care Nursing NUR402'],
                ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Community Health Nursing II NUR403'],
                ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Pediatric Nursing NUR404'],
                ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Geriatric Nursing NUR405'],
                ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Oncology Nursing NUR406'],
                ['course' => 'Nursing', 'year' => '4th year', 'subject_name' => 'Capstone Project NUR407'],
          
            
            // Engineering
          
                ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Engineering Mathematics I ENG101'],
                ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Engineering Physics ENG102'],
                ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Engineering Chemistry ENG103'],
                ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Basic Electrical Engineering ENG104'],
                ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Engineering Graphics ENG105'],
                ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Workshop Practice ENG106'],
                ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Computer Programming ENG107'],
                ['course' => 'Engineering', 'year' => '1st year', 'subject_name' => 'Communication Skills ENG108'],
            
                ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Engineering Mathematics II ENG201'],
                ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Mechanics of Solids ENG202'],
                ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Thermodynamics ENG203'],
                ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Material Science ENG204'],
                ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Fluid Mechanics ENG205'],
                ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Electrical Machines ENG206'],
                ['course' => 'Engineering', 'year' => '2nd year', 'subject_name' => 'Analog Electronics ENG207'],
            
                ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Engineering Mathematics III ENG301'],
                ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Control Systems ENG302'],
                ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Digital Electronics ENG303'],
                ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Microprocessors ENG304'],
                ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Machine Design ENG305'],
                ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Heat Transfer ENG306'],
                ['course' => 'Engineering', 'year' => '3rd year', 'subject_name' => 'Manufacturing Processes ENG307'],
            
                ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Project Management ENG401'],
                ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Industrial Automation ENG402'],
                ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Power Electronics ENG403'],
                ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Renewable Energy Systems ENG404'],
                ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Advanced Mechanics ENG405'],
                ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Robotics ENG406'],
                ['course' => 'Engineering', 'year' => '4th year', 'subject_name' => 'Capstone Project ENG407'],
            
            
            // Computer Science
            
                ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Introduction to Computing CS101'],
                ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Programming Fundamentals CS102'],
                ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Data Structures CS103'],
                ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Computer Architecture CS104'],
                ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Operating Systems CS105'],
                ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Database Management Systems CS106'],
                ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Web Development CS107'],
                ['course' => 'Computer Science', 'year' => '1st year', 'subject_name' => 'Software Engineering Principles CS108'],
            
                ['course' => 'Computer Science', 'year' => '2nd year', 'subject_name' => 'Algorithms CS201'],
                ['course' => 'Computer Science', 'year' => '2nd year', 'subject_name' => 'Computer Networks CS202'],
                ['course' => 'Computer Science', 'year' => '2nd year', 'subject_name' => 'Theory of Computation CS203'],
                ['course' => 'Computer Science', 'year' => '2nd year', 'subject_name' => 'Software Development Tools CS204'],
                ['course' => 'Computer Science', 'year' => '2nd year', 'subject_name' => 'Artificial Intelligence CS205'],
                ['course' => 'Computer Science', 'year' => '2nd year', 'subject_name' => 'Computer Graphics CS206'],
                ['course' => 'Computer Science', 'year' => '2nd year', 'subject_name' => 'Cyber Security CS207'],
            
                ['course' => 'Computer Science', 'year' => '3rd year', 'subject_name' => 'Machine Learning CS301'],
                ['course' => 'Computer Science', 'year' => '3rd year', 'subject_name' => 'Natural Language Processing CS302'],
                ['course' => 'Computer Science', 'year' => '3rd year', 'subject_name' => 'Big Data Analytics CS303'],
                ['course' => 'Computer Science', 'year' => '3rd year', 'subject_name' => 'Cloud Computing CS304'],
                ['course' => 'Computer Science', 'year' => '3rd year', 'subject_name' => 'Software Quality Assurance CS305'],
                ['course' => 'Computer Science', 'year' => '3rd year', 'subject_name' => 'Mobile Application Development CS306'],
                ['course' => 'Computer Science', 'year' => '3rd year', 'subject_name' => 'Ethical Hacking CS307'],
            
                ['course' => 'Computer Science', 'year' => '4th year', 'subject_name' => 'Blockchain Technology CS401'],
                ['course' => 'Computer Science', 'year' => '4th year', 'subject_name' => 'Internet of Things CS402'],
                ['course' => 'Computer Science', 'year' => '4th year', 'subject_name' => 'Artificial Neural Networks CS403'],
                ['course' => 'Computer Science', 'year' => '4th year', 'subject_name' => 'Virtual Reality CS404'],
                ['course' => 'Computer Science', 'year' => '4th year', 'subject_name' => 'Cyber Forensics CS405'],
                ['course' => 'Computer Science', 'year' => '4th year', 'subject_name' => 'Advanced Algorithms CS406'],
                ['course' => 'Computer Science', 'year' => '4th year', 'subject_name' => 'Capstone Project CS407'],

            
        ]);
    }
}
