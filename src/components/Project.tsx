import {FC} from "react";
import useModal from "../hooks/useModal.tsx";
import Carousel from "./Carousel.tsx";
import {iconMap} from "./Projects.tsx";

export interface IProject {
    images: string[];
    title: string;
    stack: any[];
    link: string;
    description: string;
}

const Project: FC<{ project: IProject }> = ({project}) => {
    const {link, title, images, description, stack} = project;
    const [SliderModal, {open}] = useModal();

    return (
        <div
            className="flex rounded-md transition-all duration-1000 flex-col p-10 text-white border-[1px] h-full">
            <SliderModal className="">
                <Carousel slides={images}/>
            </SliderModal>

            <div className="flex h-full flex-col items-center justify-between my-auto">
                <div className="text-4xl font-extrabold leading-none mb-5">
                    {title}
                </div>

                <div className="w-full h-full text-xl">
                    <p>{description}</p>
                </div>

                <div className="mt-5 flex justify-between w-full">
                    {stack.map((skillName) => {
                        //@ts-ignore
                        const Comp = iconMap[skillName];
                        return Comp;
                    })}
                </div>

                <div className="flex justify-center gap-4 mt-5 px-5 items-center">
                    {Boolean(project.images.length) && (
                        <button
                            className="w-[200px] rounded text-white p-2 flex items-center justify-center  md:border-[#6881cb]"
                            onClick={open}
                            title="show screenshots"
                        >
                            <svg
                                className="w-8 h-8 md:w-12 md:h-12 animate-spin-slow text-[#6881cb] hover:text-[#0077b5] transition-colors duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <span className="ml-2 text-navy-blue">Screenshots</span>
                        </button>
                    )}

                    {Boolean(project.link) && (
                        <a
                            className="md:w-[200px] rounded text-white p-2 flex items-center justify-center"
                            target="_blank"
                            href={link}
                            title="open website"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 animate-spin-slow text-[#6881cb] hover:text-[#0077b5] transition-colors duration-300"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;