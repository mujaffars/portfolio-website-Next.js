import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Contact() {
    return (
        <div>
            <Navbar />
            <Head>
                <title>Contact Me</title>
            </Head>
            <main>
                <h1>Contact Me</h1>
                <p>You can reach me at [Your Email]...</p>
            </main>
        </div>
    );
}
