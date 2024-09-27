import {FC} from "react";

import Education, { IEducation } from "./Education.tsx";



const educations: IEducation[] = [
    {
        institution: "Syrian Virtual University",
        title: "Master's in Web Science",
        date: "Oct 2022 - Present",
    },
    {
        institution: "Tishreen University",
        title: "Bachelor of Informatics Engineering",
        date: "Sep 2016 - Dec 2021",
    },
    
];


//TODO mention that we use NX,SAAS Multi tenancy Structure
const Educations: FC = () => {
    return (<div>
        <div>
            <p className="
            text-4xl 
            w-full
            mt-10
            mx-auto
            container  
            font-extrabold mb-10">Education </p>
        </div>
        <div className="
        my-5
     w-full
 mx-auto
    container
    ">
            {
                educations.map((p, index) => {
                    return (<Education key={index} education={p}/>)
                })
            }
        </div>
    </div>)
}
export default Educations