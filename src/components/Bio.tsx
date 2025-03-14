import {FC} from "react";
import Email from "../assets/icons/Email";
import Phone from "../assets/icons/Phone";
import WhatsApp from "../assets/icons/WhatsApp";
import LinkedIn from "../assets/icons/LinkedIn";
import Location from "../assets/icons/Location";
import Date from "../assets/icons/Date";
import Stackoverflow from "../assets/icons/StackOverFlow";
import Typewriter from "typewriter-effect";

const Bio: FC = () => {
    const bioText = `
        I am a seasoned web developer with a strong focus on backend technologies. My expertise spans PHP with the Laravel framework, Node.js using Express and Nest.js. Recently, I've expanded my skill set to include Golang, where I’ve been able to harness its power for efficient and scalable backend solutions. I am proficient in working with both MySQL and PostgreSQL databases, always prioritizing project success and delivering high-quality results. My commitment to continuous learning ensures that I stay aligned with the latest industry trends and best practices.
    `;

    const contactItems = [
        {
            icon: <Email/>,
            text: "daniel.f.kasem@gmail.com",
            href: "mailto:daniel.f.kasem@gmail.com",
        },
        {
            icon: <Phone/>,
            text: "+963 931 869 085",
            href: "tel:+963931869085",
        },
        {
            icon: <WhatsApp/>,
            text: "+963 931 869 085",
            href: "https://wa.me/+963931869085",
            target: "_blank",
        },
        {
            icon: <Location/>,
            text: (
                <>
                    <a
                        href="https://www.google.com/maps/place/Latakia,+Syria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Syria, Latakia
                    </a>
                    <span className="text-cyan-400 text-sm italic ml-2">(Willing To Relocate)</span>
                </>
            ),
        },
        {
            icon: <Date/>,
            text: "March 22th, 1999",
        },
        {
            icon: <LinkedIn/>,
            text: "/in/daniel-kasem",
            href: "https://www.linkedin.com/in/daniel-kasem-70bba9a4/",
            target: "_blank",
        },
        {
            icon: <Stackoverflow/>,
            text: "daniel-kasem",
            href: "https://stackoverflow.com/users/21441411/daniel-kasem",
            target: "_blank",
        },
    ];

    return (
        <section id="aboutme" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}

                <div className="container mx-auto">

                    <p
                        className="
          text-4xl md:text-6xl lg:text-8xl

    w-full
    mt-10
    text-center
    font-extrabold
    mb-10
    text-navy-blue
    bg-black
    border-b-4
    border-navy-blue
    tracking-tight
    shadow-lg
  "
                    >
                        About me
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="lg:w-1/3">
                        <div
                            className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-6 rounded-xl md:border border-gray-700">
                            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">Contact</h3>
                            <div className="space-y-4">
                                {contactItems.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <span
                                            className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                                            {item.icon}
                                        </span>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target={item.target || "_self"}
                                                rel={item.target ? "noopener noreferrer" : undefined}
                                                className="text-gray-300 group-hover:text-white transition-colors duration-300"
                                            >
                                                {item.text}
                                            </a>
                                        ) : (
                                            <span className="text-gray-300">{item.text}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bio Text */}
                    <div className="lg:w-2/3">
                        <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-6 rounded-xl  border-gray-700">
                            <div className="hidden md:block">
                                <Typewriter
                                    options={{
                                        cursor: "_",
                                        delay: 20, // Faster typing speed
                                        deleteSpeed: 30,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(
                                                `<p class="text-lg md:text-2xl space-y-10 leading-relaxed text-gray-300">${bioText}</p>`
                                            )
                                            .start();
                                    }}
                                />
                            </div>
                            <p className="block md:hidden text-lg leading-relaxed text-gray-300">{bioText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bio;