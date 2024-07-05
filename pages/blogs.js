import { useState, useEffect } from 'react';
import { fetchEntries } from '../lib/contentfulinfinite';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export async function getStaticProps() {
    const initialPosts = await fetchEntries();
    return {
        props: {
            initialPosts,
        },
    };
}

export default function Blog({ initialPosts }) {
    const [posts, setPosts] = useState(initialPosts);
    const [hasMore, setHasMore] = useState(true);
    const [skip, setSkip] = useState(initialPosts.length);

    const fetchMorePosts = async () => {
        const newPosts = await fetchEntries(skip);
        setPosts([...posts, ...newPosts]);
        setSkip(skip + newPosts.length);
        if (newPosts.length === 0) {
            setHasMore(false);
        }
    };

    console.log("Entries from Contentful:", posts);

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-4xl mx-auto p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog</h1>
                <InfiniteScroll
                    dataLength={posts.length}
                    next={fetchMorePosts}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={<p>Yay! You have seen it all</p>}
                >
                    <ul>
                        {posts.map((post) => {
                            const { shareImages } = post.fields;
                            const imageUrl = shareImages ? `https:${shareImages[0].fields.file.url}` : null;

                            return (
                                <li key={post.fields.internalName} className="mb-4">
                                    <Link href={`/blog/${post.fields.internalName}`} legacyBehavior>
                                        <a className="text-2xl text-blue-600 hover:underline">
                                            {post.fields.internalName}
                                        </a>
                                    </Link>
                                    <p>
                                        {post.fields.pageDescription}
                                    </p>
                                    <p className="text-gray-600">{post.fields.author} - {new Date(post.fields.date).toDateString()}</p>
                                    {imageUrl && (
                                        <div className="mb-8">
                                            <Image
                                                src={imageUrl}
                                                alt={shareImages[0].fields.title}
                                                width={600}
                                                height={400}
                                                className="rounded-md"
                                            />
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </InfiniteScroll>
            </div>
        </div>
    );
}
