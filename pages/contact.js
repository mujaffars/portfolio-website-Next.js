import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Contact() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <Head>
                <title>Contact Me</title>
            </Head>
            <main className="max-w-4xl mx-auto p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
                <p className="text-lg text-gray-600">
                    You can reach me at [Your Email]...
                </p>
            </main>
        </div>
    );
}
