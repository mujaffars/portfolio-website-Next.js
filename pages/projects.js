// pages/projects.js
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Projects() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <Head>
                <title>My Projects</title>
            </Head>
            <main className="max-w-4xl mx-auto p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
                <p className="text-lg text-gray-600">
                    Here are some of the projects I've worked on...
                </p>
            </main>
        </div>
    );
}
