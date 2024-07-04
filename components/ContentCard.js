import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { fetchEntries } from '../lib/contentful';

export default function ContentCard() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getProjects() {
            const entries = await fetchEntries('pageProduct');
            console.log("Entries from Contentful:", entries); // Log the entire entries object
            setProjects(entries);
        }
        getProjects();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">My contentful contents</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Here are some of the contentful contents ...
                </p>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.sys.id}
                        title={project.fields.title}
                        description={project.fields.description}
                        imageUrl={`https:${project.fields.featuredProductImage.fields.file.url}`}
                    />
                ))}
            </div>
        </div>
    );
}
