import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>My Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1>Welcome to My Portfolio</h1>
                <p>Hi, I'm [Your Name]. I am a [Your Profession].</p>
            </main>
        </div>
    );
}