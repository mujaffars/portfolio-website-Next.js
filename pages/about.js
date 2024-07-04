import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function About() {
    return (
        <div>
            <Navbar />
            <Head>
                <title>About Me</title>
            </Head>
            <main>
                <h1>About Me</h1>
                <p>Here's a bit about me...</p>
            </main>
        </div>
    );
}
