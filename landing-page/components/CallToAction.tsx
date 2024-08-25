import React from "react";

interface CallToActionProps {
    title: string;
    subtitle: string;
    callToAction: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
    title,
    subtitle,
    callToAction,
}) => {
    return (
        <section className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
                <p className="text-lg sm:text-xl mb-8">{subtitle}</p>
                <button className="bg-white text-blue-600 hover:bg-blue-100 py-3 px-6 rounded-full font-semibold shadow-md transition duration-300 ease-in-out">
                    {callToAction}
                </button>
            </div>
        </section>
    );
};

export default CallToAction;
