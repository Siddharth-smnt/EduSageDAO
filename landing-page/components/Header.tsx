import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-800">DeTaskify</h1>
            </div>

            <nav>
                <ul className="flex space-x-10">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-blue-500"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-blue-500"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/features"
                            className="text-gray-600 hover:text-blue-500"
                        >
                            Features
                        </Link>
                    </li>
                </ul>
            </nav>

            <Link
                href="/signup"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                Get Started
            </Link>
        </header>
    );
};

export default Header;
