import {FC} from "react";
import {
    AndroidPlain, DotnetcorePlain,
    FlutterPlain, GraphqlPlain,
    LaravelLine,
    NestjsLine, NodejsLine,
    SwiftPlain
} from "devicons-react";
import {SiSocketDotIo} from "@react-icons/all-files/si/SiSocketDotIo";
import {SiReact} from "@react-icons/all-files/si/SiReact";

import Project, {IProject} from "./Project.tsx";


const projects: IProject[] = [
    {
        link: "https://cloud.ordro.app",
        images: [
            "/public/ordro/1.png",
            "/public/ordro/2.png",
            "/public/ordro/3.png",
            "/public/ordro/4.png",
            "/public/ordro/5.png",
            "/public/ordro/6.png",
            "/public/ordro/7.png",
            "/public/ordro/8.png",
            "/public/ordro/9.png",
        ],
        stack: ["express", "react", "flutter"],
        title: "Ordro",
        description: "a comprehensive solution\nencompassing promotions, shipping, and stock management functionalities. The platform is designed to\nstreamline business-to-business transactions, providing a seamless experience for users involved in buying and\nselling products.",
    },
    {
        link: "https://cloud.spantrek.com",
        images: [
            "https://i.postimg.cc/Hx8Wwb3M/Screenshot-from-2024-01-05-16-02-25.png",
            "https://i.postimg.cc/3JY7y0bT/Screenshot-from-2024-01-05-16-01-27.png",
            "https://i.postimg.cc/cCK3w5Jv/Screenshot-from-2024-01-05-16-00-26.png"
        ],
        stack: ["nest", "graphql", "flutter", "react", "socketio"],
        title: "Spantrek",
        description: "The platform boasted a rich set of features, including immersive 3D and 2D maps, real-\ntime reservation boards, visitor management, and dynamic digital signage.",
    },
    {
        title: "MemoNas Chat App",
        images: [
            "/public/memo/1.png",
            "/public/memo/1.png",
        ],
        stack: ["node", "socketio", "express", "android", "swift"],
        link: "https://play.google.com/store/apps/details?id=com.yawar.memo&hl=en&gl=US",
        description: "a dynamic platform enabling one-to-one and\ngroup chats, calls, video calls, and channels. Leveraged Node.js (Express), Socket.io, and Redis for real-time\ncommunication.",
    },
    {
        title: "Ha55a Exchange",
        images: [
            "/public/ha55aExchange/1.png",
            "/public/ha55aExchange/2.png",
            "/public/ha55aExchange/3.png",
            "/public/ha55aExchange/4.png",
            "/public/ha55aExchange/5.png",
        ],
        link: "https://ha55a.exchange",
        stack: ["laravel"],
        description: "Spearheaded the development of a secure and efficient Iraqi money\n exchange website using Laravel PHP. This project enabled users to conveniently exchange currency while\n      ensuring the utmost security.",
    },
    {
        title: "StayOn",
        images: [
            "https://play-lh.googleusercontent.com/_E0qHMzDJD6z-69KXxUoALv2sLjgK_TgVxrG9FCDY-2nDewaWCyUU4wMorgBU6m4mgId=w2560-h1440-rw",
            "https://play-lh.googleusercontent.com/Olk5mDPQqetRsK5IGR8qpQVLCGSBjn2z5mDuRwoy1Ka7zLoE6N9Ovig47GYS1tUSISwj=w2560-h1440-rw",
            "https://play-lh.googleusercontent.com/bjd5LYx5bNSqDynvVkUrq7l1KFDfQE6eghtMLZcTNosfDsxVFjGvdVMFBr39TNG-R90M=w2560-h1440-rw"
        ],
        link: "https://play.google.com/store/apps/details?id=co.flexsol.stayon&hl=en_US&gl=US",
        stack: ["laravel", "flutter"],
        description: "The Stay On application is an application of electronic courses in an academic and high-level manner, for\n professors and lecturers known in their field.",
    },
    {
        title: "LPCenter",
        images: [
            "/public/lpc/1.png",
            "/public/lpc/2.png",
        ],
        link: "https://www.lpcentre.com",
        description: "London Premier Centre is a UK leading training provider based in London and specialises in international short courses.\"",
        stack: ["laravel"]
    },
    {
        title: "Ha55a Store",
        link: "https://www.ha55a.com",
        stack: ["netcore"],
        description: "Digital Services Store allow merchants to sell their services",
        images: [
            "/public/ha55a/1.png",
            "/public/ha55a/2.png",
        ]
    },
    {
        title: "Vitastir",
        link: "",
        stack: ["laravel","react","next","nest",'socketio'],
        description: "a comprehensive health e-commerce platform facilitating the seamless purchase of medical products. Key features include a user-friendly interface, secure transactions, prescription management, personalized recommendations, and a health information hub.",
        images: [
            "/public/vita/1.png",
            "/public/vita/2.png",
            "/public/vita/3.png",
            "/public/vita/4.png",
            "/public/vita/5.png",
            "/public/vita/6.png",
            "/public/vita/7.png",
            "/public/vita/8.png",
            "/public/vita/9.png",
            "/public/vita/10.png",
            "/public/vita/11.png",
            "/public/vita/12.png",
            "/public/vita/13.png",
            "/public/vita/14.png",
            "/public/vita/15.png",
            "/public/vita/16.png",
            "/public/vita/17.png",
            "/public/vita/18.png",
        ]
    },
    {
        title: "Yamama Cement",
        link: "",
        stack: ["netcore"],
        description: "Dashboard for Yamama Cement company in ksa",
        images: []
    },
    {
        title: "Baraem",
        link: "",
        stack: ["laravel","vue"],
        description: "non profit organization",
        images: []
    },
    // {blue
    //     title: "Prokoders Main website",
    //     link: "",
    //     stack: [""],
    //     description: "",
    //     images: []
    // }
]


//TODO mention that we use NX,SAAS Multi tenancy Structure

export const iconMap = {
    "nest": <NestjsLine color="white" size="75"/>,
    "laravel": <LaravelLine color="white" size="75"/>,
    "flutter": <FlutterPlain color="white" size="75"/>,
    "swift": <SwiftPlain color="white" size="75"/>,
    "android": <AndroidPlain color="white" size="75"/>,
    "node": <NodejsLine color="white" size="75"/>,
    "graphql": <GraphqlPlain color="white" size="75"/>,
    "socketio": <SiSocketDotIo size="75"/>,
    "react": <SiReact size="75"/>,
    "netcore": <DotnetcorePlain color="white" size="75"/>,
}

const Projects: FC = () => {
    return (<div>
        <div>
            <p className="text-4xl  w-full
    mx-auto
    container  font-extrabold mb-10">Projects </p>
        </div>
        <div className="
    grid
    md:grid-cols-2
    grid-cols-1
    gap-5
    w-full
    mx-auto
    container
    ">
            {
                projects.map((p, index) => {
                    return (<Project key={index} project={p}/>)
                })
            }
        </div>
    </div>)
}
export default Projects