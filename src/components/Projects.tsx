import {FC} from "react";
import {
    AndroidPlain, DotnetcorePlain,
    FlutterPlain, GraphqlPlain,
    LaravelLine,
    NestjsLine, NodejsLine,
    SwiftPlain
} from "devicons-react";
import Project, {IProject} from "./Project.tsx";
import {SiSocketDotIo} from "@react-icons/all-files/si/SiSocketDotIo";
import {SiReact} from "@react-icons/all-files/si/SiReact";

const projects: IProject[] = [
    {
        link: "https://cloud.ordro.app",
        images: [
            "https://i.postimg.cc/mkmtXvdL/photo-2024-01-05-20-37-44.jpg",
            "https://i.postimg.cc/sxYMYBWh/photo-2024-01-05-20-23-38.jpg",
            "https://i.postimg.cc/j5zx9pjV/photo-2024-01-05-20-26-37.jpg",
            "https://i.postimg.cc/mZXfrpMQ/Screenshot-from-2024-01-05-16-11-49.png"
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
            "https://i.postimg.cc/C14ZDpYM/photo-2024-01-05-18-19-30.jpg",
            "https://i.postimg.cc/8PcFFYYD/photo-2024-01-05-18-19-29.jpg",
            "https://i.postimg.cc/VLhJXRyt/photo-2024-01-05-18-19-26.jpg"
        ],
        stack: ["node", "socketio", "express", "android", "swift"],
        link: "https://play.google.com/store/apps/details?id=com.yawar.memo&hl=en&gl=US",
        description: "a dynamic platform enabling one-to-one and\ngroup chats, calls, video calls, and channels. Leveraged Node.js (Express), Socket.io, and Redis for real-time\ncommunication.",
    },
    {
        title: "Ha55a Exchange",
        images: [
            "https://i.postimg.cc/hvkqthwX/Screenshot-from-2024-01-05-15-50-11.png",
            "https://i.postimg.cc/wBpTk4w1/Screenshot-from-2024-01-05-15-57-23.png",
            "https://i.postimg.cc/SKkk92K8/Screenshot-from-2024-01-05-15-52-55.png",
            "https://i.postimg.cc/HxLmSqXk/Screenshot-from-2024-01-05-15-52-05.png"
        ],
        link: "https://ha55a.exchange",
        stack: ["laravel"],
        description: "Spearheaded the development of a secure and efficient Iraqi money\n      exchange website using Laravel PHP. This project enabled users to conveniently exchange currency while\n      ensuring the utmost security.",
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
            "https://i.postimg.cc/rFx5Ws7V/photo-2024-01-06-21-51-25.jpg",
            "https://i.postimg.cc/rFx5Ws7V/photo-2024-01-06-21-51-25.jpg"
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
        images: []
    },
    {
        title: "MediaNas SocialApp",
        link: "https://play.google.com/store/apps/details?id=com.maalialkhair.media&hl=en&gl=US",
        stack: ["laravel","android","swift"],
        description: "An social network app that lets you to connect with people around the world\n",
        images: []
    },
    {
        title: "Yamama Cement",
        link: "",
        stack: ["netcore"],
        description: "",
        images: []
    },
    {
        title: "Baraem",
        link: "",
        stack: [],
        description: "",
        images: []
    },
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