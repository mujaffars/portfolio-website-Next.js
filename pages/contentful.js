import Head from 'next/head';
import Navbar from '../components/Navbar';
import ContentCard from '../components/ContentCard';

export default function ContentfulPage() {
    return (
        <div>
            <Navbar />
            <Head>
                <title>My contentful contents:</title>
            </Head>
            <ContentCard />
        </div>
    );
}
