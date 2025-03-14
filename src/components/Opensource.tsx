import { FC } from "react";

const OpenSource: FC = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-navy-blue text-white">
            <div className="container mx-auto px-4 pt-16">
                <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                    Open Source & Packages
                </h2>
                <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
                    As a backend developer, I’m passionate about building tools that simplify workflows. Check out my flow management package and join the open-source journey!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl p-5 shadow-md hover:bg-navy-blue transition-all duration-300">
                        <h3 className="text-xl font-bold text-white">FlowMaster</h3>
                        <p className="text-gray-300 mt-2">A Node.js package for managing asynchronous task flows with built-in error handling and scalability.</p>
                        <ul className="text-gray-300 mt-2 list-disc list-inside">
                            <li>Task queuing</li>
                            <li>Custom pipelines</li>
                            <li>Robust error recovery</li>
                        </ul>
                        <a
                            href="https://github.com/yourusername/flowmaster"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block bg-navy-blue text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-navy-blue transition-all duration-300"
                        >
                            View on GitHub
                        </a>
                    </div>
                    {/* Add more cards for other contributions here */}
                </div>
            </div>
        </section>
    );
};

export default OpenSource;