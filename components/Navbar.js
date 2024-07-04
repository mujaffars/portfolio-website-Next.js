// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="max-w-6xl mx-auto px-4">
                <ul className="flex items-center justify-between">
                    <li>
                        <Link href="/" legacyBehavior>
                            <a className="text-white text-lg font-bold hover:text-gray-300">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" legacyBehavior>
                            <a className="text-white text-lg font-bold hover:text-gray-300 ml-4">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" legacyBehavior>
                            <a className="text-white text-lg font-bold hover:text-gray-300 ml-4">Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" legacyBehavior>
                            <a className="text-white text-lg font-bold hover:text-gray-300 ml-4">Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
