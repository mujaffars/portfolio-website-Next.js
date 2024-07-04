import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Projects() {
    return (
        <div>
            <Navbar />
            <Head>
                <title>My Projects</title>
            </Head>
            <main>
                <h1>My Projects</h1>
                <p>Here are some of the projects I've worked on...</p>
            </main>
        </div>
    );
}
