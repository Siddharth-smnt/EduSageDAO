import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import UseCases from "../components/UseCases";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>DeTaskify</title>
                <meta
                    name="description"
                    content="Democratizing Data, Education, and Decision-Making"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main>
                <Hero
                    title="Unlock the Power of the Crowd"
                    subtitle="Learn, Earn, and Shape the Future"
                    userButtonText="Explore User Platform"
                    workerButtonText="Explore Worker Platform"
                    userLink="/user"
                    workerLink="/worker"
                />
                <section className="py-12 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                            Transforming How We Learn, Work, and Interact
                        </h2>
                        <p className="text-lg text-gray-600 text-center mb-12">
                            Leverage the Power of Blockchain for Decentralized,
                            Transparent, and Secure Processes
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <FeatureCard
                                icon="📊"
                                title="Data Labeling"
                                description="Train AI models with high-quality, crowdsourced data"
                            />
                            <FeatureCard
                                icon="🗳️"
                                title="Voting & Consensus"
                                description="Make collective decisions on images, content, and proposals"
                            />
                            <FeatureCard
                                icon="📚"
                                title="Educational Choice"
                                description="Empower learners to choose the best curriculum for their needs"
                            />
                            <FeatureCard
                                icon="💰"
                                title="Crypto Payments"
                                description="Earn cryptocurrency rewards for your contributions"
                            />
                        </div>
                    </div>
                </section>
                <UseCases /> <HowItWorks />
                <CallToAction
                    title="Join the Web3 Movement Today"
                    subtitle="Empower yourself, earn rewards, and make a difference"
                    callToAction="Get Started Now"
                />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Home;
