import { FC } from "react";
import useModal from "../hooks/useModal.tsx";
import Carousel from "./Carousel.tsx";
import { iconMap } from "./Projects.tsx";
import Email from "../assets/icons/Email.tsx";

export interface IProject {
    images: string[];
    title: string;
    stack: any[];
    link: string;
    description: string;
}

const Project: FC<{ project: IProject }> = ({ project }) => {
    const { link, title, images, description, stack } = project;
    const [SliderModal, { open }] = useModal();

    return (
        <div
            className="flex rounded-md hover:bg-[#6881cb] transition-all duration-1000 flex-col p-10 text-white border-[1px] h-full"
        >

            <SliderModal className="">
                <Carousel slides={images} />
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

                <div className="flex justify-center gap-4 mt-5">
                    {Boolean(project.images.length) && (
                        <button
                            className="w-[200px] rounded text-white p-2 "
                            onClick={open}
                        >
                            Screenshots
                        </button>
                    )}
                    {Boolean(project.link) && (
                        <a
                            className="w-[200px] rounded text-white p-2 "
                            target="_blank"
                            href={link}
                        >
                            Online
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;