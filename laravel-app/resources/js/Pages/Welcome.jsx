import { useState } from 'react';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const courses = [
        'https://www.collinsdictionary.com/images/full/coursen_183126758.jpg',
        'https://www.coursefinders.com/wp-content/uploads/2017/07/course.jpg',
        'https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2024/03/11/4cdb4fbc-c448-4af5-bb6e-ffdf677548c6_e1a83bec.jpg?itok=4Pa3Dk7Q&v=1710134844'
    ];

    const [currentCourse, setCurrentCourse] = useState(0);

    const nextCourse = () => {
        setCurrentCourse((prev) => (prev + 1) % courses.length);
    };

    const prevCourse = () => {
        setCurrentCourse((prev) => (prev - 1 + courses.length) % courses.length);
    };

    return (
        <>
            <Head title="Welcome to Mackenzie University" />
            <div className="relative min-h-screen bg-cover bg-center overflow-y-auto" 
                style={{ backgroundImage: "url('https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2024/03/11/4cdb4fbc-c448-4af5-bb6e-ffdf677548c6_e1a83bec.jpg?itok=4Pa3Dk7Q&v=1710134844')" }}
            >
                <div className="absolute inset-0 bg-black opacity-70"></div> 
                
                <header className="relative w-full bg-opacity-75 bg-black shadow-lg">
                    <div className="container mx-auto flex justify-between items-center py-6 px-6">
                        <div className="flex items-center">
                            <img src="/MU%20logo.png" alt="Logo" className="h-20 w-20 mr-3" />
                            <div className="text-3xl font-bold text-white">
                                Mackenzie University
                            </div>
                        </div>
                    </div>
                </header>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                    <h1 className="text-6xl font-bold mb-6 animate__animated animate__fadeInDown">Welcome to Mackenzie University</h1>
                    <p className="mb-12 text-xl animate__animated animate__fadeInUp animate__delay-1s">
                        Manage your enrollment process seamlessly with our intuitive system.
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            href="/login"
                            className="bg-transparent border-2 border-white text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-white hover:text-blue-500 transition duration-300"
                        >
                            Log in
                        </Link>
                        <Link
                            href="/register"
                            className="bg-transparent border-2 border-white text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-white hover:text-blue-500 transition duration-300"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="bg-gray-100 py-12">
                <div className="max-w-5xl mx-auto flex items-start flex-col md:flex-row px-6 md:px-0">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-12">
                        <img src="/MU%20logo.png" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl font-bold mb-6">Brief Introduction</h1>
                        <p className="text-lg text-justify mb-4">
                            Mackenzie University, a prestigious institution nestled in the vibrant city of Shudi, Encantadia, stands as a beacon of academic excellence and innovation. Founded in 2024 by the American missionary Rev. Dr. Lordweil E. Bakoosh, the university has evolved into a distinguished center for higher learning, blending tradition with modernity to nurture intellects and shape future leaders. With a commitment to holistic education, Mackenzie University offers a diverse array of undergraduate and graduate courses across various disciplines, including engineering, information technology, and college of technology. Renowned for its rigorous academic standards and dynamic research initiatives, the university fosters an environment where curiosity thrives, and students are empowered to explore, question, and innovate. Beyond academics, Mackenzie University cultivates a rich campus life, providing students with ample opportunities for personal growth, cultural enrichment, and community engagement. From vibrant student organizations to state-of-the-art facilities, the university ensures a supportive and inclusive environment where individuals from all backgrounds can thrive. As a trailblazer in Bakoosh higher education, Mackenzie University continues to push boundaries, adapt to emerging trends, and redefine the educational landscape, inspiring generations to dream, discover, and make a meaningful impact on the world.
                        </p>
                        <Link href="#" className="mt-4 inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-700 transition duration-300">
                            Contact Us Now
                        </Link>
                    </div>
                </div>
            </div>
          
            <div className="bg-black py-12">
                <div className="container mx-auto text-center text-white">
                    <h2 className="text-4xl font-bold mb-12">Our Courses</h2>
                    <div className="relative flex items-center justify-center space-x-4">
                        <button
                            onClick={prevCourse}
                            className="bg-transparent border-2 border-gray-200 text-gray-200 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 hover:text-black transition duration-300"
                        >
                            &lt;
                        </button>
                        <div className="flex overflow-hidden w-80 h-80 mx-4">
                            {courses.map((course, index) => (
                                <img 
                                    key={index} 
                                    src={course} 
                                    alt={`Course ${index + 1}`} 
                                    className={`w-full h-full object-cover rounded-lg shadow-lg transition duration-300 ${index === currentCourse ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextCourse}
                            className="bg-transparent border-2 border-gray-200 text-gray-200 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 hover:text-black transition duration-300"
                        >
                            &gt;
                        </button>
                    </div>
                    <div className="flex justify-center mt-4">
                        {courses.map((_, index) => (
                            <span 
                                key={index}
                                className={`w-3 h-3 mx-1 rounded-full ${index === currentCourse ? 'bg-blue-600' : 'bg-gray-400'}`}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
           
            <footer className="bg-black py-6 text-white text-center">
                <div className="container mx-auto">
                    <nav className="flex justify-center space-x-6 mb-4">
                        <Link href="#" className="hover:text-gray-400 transition duration-300">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-400 transition duration-300">Terms of Service</Link>
                        <Link href="#" className="hover:text-gray-400 transition duration-300">Contact Us</Link>
                    </nav>
                    <p className="text-sm">&copy; 2024 Mackenzie University. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
