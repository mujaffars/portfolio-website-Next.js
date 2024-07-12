// pages/index.tsx (if using TypeScript)
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">

            <Navbar />
            <Head>
                <title>My Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-4xl mx-auto p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg text-gray-600">Hi, I&apos;m Mujaffar. I am a Software Developer.</p>
            </main>
        </div>
    );
}
