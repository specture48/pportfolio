import {FC} from "react";
import Skill, {ISkill} from "./Skill.tsx";

const Skills: FC = () => {
    const mySkills: ISkill[] = [{
        title: "Rest Api & Graphql",
        description: "I utilized both Restful API and GraphQL to  build scalable  applications."
    },
        {
            title: "RealTime",
            description: "Dived into the realm of real-time technologies such as Socket.io, Firebase."
        },
        {
            title:"Integrations with 3party",
            description:"IOT [Airthings,Webex,Cisco], Payment Gateways ,Social Media Platforms,Smart Workspaces"
        }
    ]

    return <div className="
    w-full
    mx-auto
    container
    mb-10
    ">
        <div>
            <p className="text-4xl  font-extrabold my-5"> Skills </p>
        </div>
        <div className="
                grid
                md:grid-cols-3
                grid-cols-1
                gap-5
                mt-10
                ">
            {mySkills.map((skill) => (
                <Skill  skill={skill}/>
            ))}
        </div>

    </div>
}
export default Skills