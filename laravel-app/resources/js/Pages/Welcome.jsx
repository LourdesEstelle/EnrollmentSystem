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
                        <Link href="#" className="text-white hover:text-gray-300">Home</Link>
                        <Link href="#" className="text-white hover:text-gray-300">About</Link>
                        <Link href="#" className="text-white hover:text-gray-300">Contact</Link>
                    </nav>
                </div>
            </header>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-0 relative">
                {/* Background image with a stronger semi-transparent black overlay */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2023/12/15/581dbb04-4e2a-4be4-a8f0-67bd06a72219_7211c2d2.jpg")' }}></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
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
                                    className="btn-primary mx-2 mt-4 sm:mt-0 bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100"
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
                    <div className="mt-12 text-sm text-gray-100">
                        New to Mackenzie University? <Link href="#" className="underline hover:text-gray-300">Learn more about us</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
