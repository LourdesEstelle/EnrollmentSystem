import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome to Mackenzie University" />
            <div className="relative min-h-screen bg-cover bg-center overflow-y-auto" 
                style={{ backgroundImage: "url('https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2024/03/11/4cdb4fbc-c448-4af5-bb6e-ffdf677548c6_e1a83bec.jpg?itok=4Pa3Dk7Q&v=1710134844')" }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div> 
                
                <header className="relative w-full bg-opacity-75 bg-black shadow-lg">
                    <div className="container mx-auto flex justify-between items-center py-6 px-6">
                        <div className="text-3xl font-bold text-white">
                            Mackenzie University
                        </div>
                        <nav className="flex space-x-6 items-center">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="text-white hover:text-gray-200 transition duration-300 text-lg"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="text-white hover:text-gray-200 transition duration-300 text-lg"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="text-white hover:text-gray-200 transition duration-300 text-lg"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>
                <div className="absolute inset-0 flex justify-center items-center flex-col text-center text-white">
                    <h1 className="text-5xl font-bold mb-6">Welcome to Mackenzie University</h1>
                    <p className="mb-12 text-xl">
                        Manage your enrollment process seamlessly with our intuitive system.
                    </p>
                    <Link
                        href={route('register')}
                        className="bg-green-800 text-white font-semibold py-3 px-10 rounded-lg shadow-lg hover:bg-green-900 transition duration-300 text-lg"
                   
                        
                    >
                        Enroll Now
                    </Link>
                </div>
            </div>
            
            
            <div className="bg-white py-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">Introduction to Mackenzie University</h1>
                    <p className="text-lg">{`Mackenzie University, a prestigious institution nestled in the vibrant city of Oze, Encantadia, stands as a beacon of academic excellence and innovation. Founded in 2024 by the American missionary Rev. Dr. Lordweil E. Bakoosh, the university has evolved into a distinguished center for higher learning, blending tradition with modernity to nurture intellects and shape future leaders. With a commitment to holistic education, Mackenzie University offers a diverse array of undergraduate and graduate courses across various disciplines, including engineering, information technology, and college of technology. Renowned for its rigorous academic standards and dynamic research initiatives, the university fosters an environment where curiosity thrives, and students are empowered to explore, question, and innovate. Beyond academics, Mackenzie University cultivates a rich campus life, providing students with ample opportunities for personal growth, cultural enrichment, and community engagement. From vibrant student organizations to state-of-the-art facilities, the university ensures a supportive and inclusive environment where individuals from all backgrounds can thrive. As a trailblazer in Brazilian higher education, Mackenzie University continues to push boundaries, adapt to emerging trends, and redefine the educational landscape, inspiring generations to dream, discover, and make a meaningful impact on the world.`}</p>
                </div>
            </div>
          
            <div className="bg-black py-12">
                <div className="relative container mx-auto text-center text-white">
                    <h2 className="text-4xl font-bold mb-12">Our Courses</h2>
                    <div className="flex flex-wrap justify-center space-x-6 mb-12">
                        <div className="bg-gray-200 w-80 h-40 flex items-center justify-center m-4 shadow-lg hover:shadow-xl transition duration-300 rounded-lg overflow-hidden">
                            <img src="https://www.collinsdictionary.com/images/full/coursen_183126758.jpg" alt="CITC Course Image" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-gray-200 w-80 h-40 flex items-center justify-center m-4 shadow-lg hover:shadow-xl transition duration-300 rounded-lg overflow-hidden">
                            <img src="https://www.collinsdictionary.com/images/full/coursen_183126758.jpg" alt=" CEA Course Image" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-gray-200 w-80 h-40 flex items-center justify-center m-4 shadow-lg hover:shadow-xl transition duration-300 rounded-lg overflow-hidden">
                            <img src="https://www.coursefinders.com/wp-content/uploads/2017/07/course.jpg" alt="COT Course Image" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
           
            <footer className="relative bg-black bg-opacity-100 py-6 text-white text-center">
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