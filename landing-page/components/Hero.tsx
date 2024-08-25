// components/Hero.tsx

import React from "react";
import Link from "next/link";

interface HeroProps {
    title: string;
    subtitle: string;
    userButtonText: string;
    workerButtonText: string;
    userLink: string;
    workerLink: string;
}

const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    userButtonText,
    workerButtonText,
    userLink,
    workerLink,
}) => {
    return (
        <section className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-opacity-50 backdrop-blur-md"></div>
            <div className="relative max-w-7xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                    {title}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl mb-8 animate-slide-up">
                    {subtitle}
                </p>
                <div className="flex justify-center space-x-4">
                    <Link href={userLink} legacyBehavior>
                        <a className="bg-white text-blue-500 hover:bg-blue-100 py-2 px-4 rounded-full font-semibold shadow-md transition duration-300 ease-in-out animate-bounce-slow">
                            {userButtonText}
                        </a>
                    </Link>
                    <Link href={workerLink} legacyBehavior>
                        <a className="bg-white text-blue-500 hover:bg-blue-100 py-2 px-4 rounded-full font-semibold shadow-md transition duration-300 ease-in-out animate-bounce-slow">
                            {workerButtonText}
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
