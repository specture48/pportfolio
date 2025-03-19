const TestSkills = () => {
    const skills = [
        "React.js",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Python",
        "Git",
        "HTML/CSS",
        "Tailwind",
    ];

    return (
        <section className="py-12 px-4 max-w-5xl mx-auto relative overflow-hidden">
            <h2 className="text-4xl font-extrabold mb-12 text-center text-white tracking-wider">
                Skills
            </h2>
            <div className="relative h-48 flex items-center justify-center">
                <div className="absolute w-full h-full flex flex-wrap justify-center gap-6">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="inline-block px-4 py-2 text-gray-200 text-base font-mono bg-gray-900/70 rounded-md animate-flow"
                            style={{
                                animationDelay: `${index * 0.3}s`,
                                transformOrigin: "center",
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
                {/* Subtle background wave */}
                <div className="absolute inset-0 -z-10">
                    <div className="w-full h-full bg-gradient-to-r from-cyan-400/10 via-transparent to-cyan-400/10 animate-wave" />
                </div>
            </div>
        </section>
    );
};

export default TestSkills;