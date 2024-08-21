import React from "react";
import Image from "next/image";

interface LandingPageProps {
    onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            {/* Hero Section */}
            <div className="relative w-full h-96">
                <Image
                    src="/hero-image.jpg"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-40"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center space-y-4">
                <h1 className="text-5xl font-bold leading-tight">
                    Welcome to EduLabel DAO
                </h1>
                <p className="text-xl max-w-xl mt-2">
                    Crowdsourced Data Labeling with Crypto Payments. Join the
                    revolution!
                </p>
                <button
                    className="mt-6 px-8 py-4 bg-green-500 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:bg-green-400"
                    onClick={onStart}
                >
                    Get Started
                </button>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-4 text-center text-sm opacity-70">
                © 2024 EduLabel DAO. All rights reserved.
            </footer>
        </div>
    );
};

export default LandingPage;
