// components/ProjectCard.js
import Image from 'next/image';

export default function ProjectCard({ title, description, imageUrl }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt={title}
                    className="w-full h-64 object-cover"
                    width={500}
                    height={300}
                />
            )}
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}
