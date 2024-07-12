// pages/projects.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description for project 1.',
            imageUrl: '/images/project1.png',
        },
        {
            title: 'Project 2',
            description: 'Description for project 2.',
            imageUrl: '/images/project2.png',
        },
        {
            title: 'Project 3',
            description: 'Description for project 3.',
            imageUrl: '/path/to/image3.jpg',
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <Head>
                <title>My Projects</title>
            </Head>
            <main className="max-w-4xl mx-auto p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Here are some of the projects I&apos;ve worked on...
                </p>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                    />
                ))}
            </main>
        </div>
    );
}
