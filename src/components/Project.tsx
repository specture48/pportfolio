import { FC } from "react";
import useModal from "../hooks/useModal.tsx";
import Carousel from "./Carousel.tsx";
// import { iconMap } from "./Projects.tsx";
import Website from "../assets/icons/Website.tsx";
import ScreenShot from "../assets/icons/ScreenShot.tsx";

export interface IProject {
    images: string[];
    title: string;
    stack: any[];
    link: string;
    description: string;
}

const Project: FC<{ project: IProject }> = ({ project }) => {
    const { link, title, images, description } = project;
    const [SliderModal, { open }] = useModal();
    // Use the first image as the featured image if available
    const featuredImage = images.length > 0 ? images[0] : null;

    return (
        <div className="group relative rounded-xl transition-all duration-300
            flex-col p-6 text-white border-[1px] border-gray-800
            bg-gradient-to-br from-gray-900 to-black
            hover:shadow-xl hover:shadow-blue-500/20
            transform hover:-translate-y-1 h-full">

            <SliderModal className="z-50">
                <Carousel slides={images} />
            </SliderModal>

            <div className="flex h-full flex-col justify-between">
                {/* Featured Image */}
                {featuredImage && (
                    <div className="mb-4 overflow-hidden rounded-lg">
                        <img
                            src={featuredImage}
                            alt={`${title} preview`}
                            className="w-full h-48 object-cover
                                transform transition-transform duration-300
                                group-hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                )}

                {/* Title */}
                <div className="text-3xl font-bold tracking-tight mb-4
                    text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {title}
                </div>

                {/* Description */}
                <div className="text-gray-300 text-lg leading-relaxed mb-6 flex-grow">
                    <p>{description}</p>
                </div>

                {/* Tech Stack */}
                {/*<div className="flex flex-wrap gap-3 mb-6">*/}
                {/*    {stack.map((skillName, index) => {*/}
                {/*        const Comp = iconMap[skillName];*/}
                {/*        return (*/}
                {/*            <div key={index} className="transform transition-transform hover:scale-110">*/}
                {/*                {Comp}*/}
                {/*            </div>*/}
                {/*        );*/}
                {/*    })}*/}
                {/*</div>*/}

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 justify-center">
                    {Boolean(images.length) && (
                        <button
                            className="flex items-center justify-center gap-2 px-4 py-2
                                rounded-lg bg-blue-600 hover:bg-blue-700
                                transition-colors duration-200
                                text-white font-medium"
                            onClick={open}
                            title="show screenshots"
                        >
                            <ScreenShot />
                            <span>Screenshots</span>
                        </button>
                    )}

                    {Boolean(link) && (
                        <a
                            className="flex items-center justify-center gap-2 px-4 py-2
                                rounded-lg bg-purple-600 hover:bg-purple-700
                                transition-colors duration-200
                                text-white font-medium"
                            target="_blank"
                            href={link}
                            title="open website"
                        >
                            <Website />
                            <span>Visit Site</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Overlay effect */}
            <div className="absolute inset-0 bg-blue-500/10 opacity-0
                group-hover:opacity-100 transition-opacity duration-300
                rounded-xl pointer-events-none"></div>
        </div>
    );
};

export default Project;