import {FC} from "react";
export interface ISkill{
    title:string
    description:string
}

const Skill: FC<{ skill: ISkill }> = ({skill}) => {
    const {description,title}=skill
    return (<div  className='flex  rounded-md hover:bg-[#6881cb] transition-all duration-1000 flex-col p-10 text-white border-[1px]   '>

        <div className="flex h-full flex-col items-center justify-between my-auto  ">
            <div className="text-2xl font-extrabold leading-non mb-5">
                {title}
            </div>
            <div className="w-full h-full text-xl ">
                <p>
                    {description}
                </p>
            </div>
        </div>

    </div>)
}
export default Skill