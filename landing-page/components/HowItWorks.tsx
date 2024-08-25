import React from "react";

const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: "🔗",
            title: "Signup Process",
            description:
                "Signing up is simple; the user and worker just need to connect their wallet.",
        },
        {
            icon: "🚀",
            title: "Task Creation",
            description:
                "The user creates a task, assigns Solana as a reward for completing the task, and submits it.",
        },
        {
            icon: "📋",
            title: "Task Assignment",
            description: "The task is made available on the worker's page.",
        },
        {
            icon: "🏆",
            title: "Task Completion & Rewards",
            description:
                "Workers complete the task and receive Solana as a reward.",
        },
        {
            icon: "💸",
            title: "Withdrawal Process",
            description:
                "Once the worker's earnings reach a certain threshold, they can withdraw the Solana to their connected wallet.",
        },
    ];

    return (
        <section className="py-12 bg-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    How It Works
                </h2>
                <p className="text-lg text-gray-600 text-center mb-12">
                    Join the Web3 revolution in a few easy steps
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-blue-500 transition-transform duration-300 hover:scale-105"
                        >
                            <div className="mb-4">
                                <span className="text-4xl">{step.icon}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-center">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
