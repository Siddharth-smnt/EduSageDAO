import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center">
                    {" "}
                    <div className="flex space-x-4 mb-4"> </div>
                    <p className="text-sm text-center">&copy; 2024 DeTaskify</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
