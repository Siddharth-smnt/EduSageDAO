import React from "react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description,
    icon,
}) => {
    return (
        <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white">
            <div className="mb-4">
                <span className="text-4xl text-blue-500">{icon}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
            </h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );
};

export default FeatureCard;
