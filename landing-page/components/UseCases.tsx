import React from "react";

interface UseCase {
    icon: string;
    title: string;
    description: string;
}

const UseCases: React.FC = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
                    Diverse Applications Across Industries
                </h2>
                <p className="text-lg text-gray-600 text-center mb-12">
                    From AI development to community governance, Web3 is
                    revolutionizing the way we work
                </p>

                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
                        >
                            <div className="mb-4">
                                <span className="text-4xl text-blue-500">
                                    {useCase.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                                {useCase.title}
                            </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                {useCase.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const useCases: UseCase[] = [
    {
        icon: "🤖",
        title: "AI & Machine Learning",
        description:
            "Train AI models with high-quality, crowdsourced data for breakthrough insights.",
    },
    {
        icon: "🌐",
        title: "Decentralized Finance (DeFi)",
        description:
            "Empower your finances with transparent, secure, and decentralized transactions.",
    },
    {
        icon: "🎨",
        title: "Digital Art & NFTs",
        description:
            "Tokenize unique digital creations and trade them on the blockchain.",
    },
    {
        icon: "🏛️",
        title: "Community Governance",
        description:
            "Participate in decentralized decision-making through token-based voting.",
    },
];

export default UseCases;
