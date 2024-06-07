import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome to Mackenzie University" />
            <header className="w-full bg-black shadow-lg">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <div className="text-2xl font-bold text-white">
                        Mackenzie University
                    </div>
                    <nav className="flex space-x-4">
                        <a href="https://www.ustp.edu.ph/" className="text-white hover:text-gray-300">Home</a>
                        <a href="https://www.ustp.edu.ph/about-ustp/the-ustp-profile/#" className="text-white hover:text-gray-300">About</a>
                        <a href="https://www.ustp.edu.ph/contact-us/" className="text-white hover:text-gray-300">Contact</a>
                    </nav>
                </div>
            </header>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-0 relative">
                {/* Background image with a stronger semi-transparent black overlay */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2023/12/15/581dbb04-4e2a-4be4-a8f0-67bd06a72219_7211c2d2.jpg")' }}></div>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                {/* Content */}
                <div className="max-w-2xl text-center relative z-10">
                    <header className="py-10">
                        <h1 className="text-5xl font-extrabold mb-6">Welcome to Mackenzie University</h1>
                        <p className="text-lg text-gray-100">
                            Manage your enrollment process seamlessly with our intuitive system.
                        </p>
                    </header>
                    <nav className="flex flex-col sm:flex-row justify-center mt-8">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="btn-primary mx-2 mt-4 sm:mt-0 bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100"
                            >
                                Go to Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="btn-secondary mx-2 mt-4 sm:mt-0 bg-transparent border-2 border-white text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-white hover:text-blue-500"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="btn-secondary mx-2 mt-4 sm:mt-0 bg-transparent border-2 border-white text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-white hover:text-blue-500"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
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