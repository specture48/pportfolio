// import {Fragment} from "react";
//
// const Timeline = () => {
//     // Data from Image 0, adapted for the timeline
//     const timelineData = [
//         // {
//         //     duration: '2018 - 2021',
//         //     title: 'ICPC Contestant - Problem Setter - Coach',
//         //     description: (
//         //         <ul className="list-disc pl-4">
//         //             <li>Regional Contestant in ACPC 2021</li>
//         //             <li>Silver medal in the SCPC 2021</li>
//         //             <li>Golden medal in the Girls ACPC 2020</li>
//         //             <li>Problem Setter at SCPC 2020</li>
//         //             <li>Expert rank on Codeforces website</li>
//         //         </ul>
//         //     ),
//         // },
//         // {
//         //     duration: '09/2022 - 02/2024',
//         //     title: 'Full-Stack Web Developer, Aratech, Dubai, UAE (Remote)',
//         //     description: (
//         //         <ul className="list-disc pl-4">
//         //             <li>Gained 1.5 years of experience in Laravel and MVC architecture</li>
//         //             <li>Worked on 10+ projects using HTML, CSS, JavaScript</li>
//         //             <li>Developed 5+ projects using PHP, Laravel Framework, Tailwind, and jQuery</li>
//         //             <li>Contributed to 2 projects using Laravel Nova and Google Maps API</li>
//         //             <li>Worked on 5 WordPress projects</li>
//         //         </ul>
//         //     ),
//         // },
//         // {
//         //     duration: '02/2024 - 09/2024',
//         //     title: 'Front-End Web Developer, Divco, Beirut, Lebanon (Remote)',
//         //     description: (
//         //         <ul className="list-disc pl-4">
//         //             <li>Worked in Front-End Development using React, Next.js, and TypeScript</li>
//         //             <li>Involved in 2 projects, enhancing React development skills</li>
//         //             <li>Utilized RESTful APIs in both projects and integrated Next.js</li>
//         //         </ul>
//         //     ),
//         // },
//         // {
//         //     duration: '08/2024 - Present',
//         //     title: 'Freelance Web Developer, Eyes360, Cairo, Egypt (Remote)',
//         //     description: (
//         //         <ul className="list-disc pl-4">
//         //             <li>Working on WebGL projects, integrating 3D rendering into web applications</li>
//         //             <li>Delivering optimized, interactive frontend solutions</li>
//         //         </ul>
//         //     ),
//         // },
//         {
//             duration: '11/2024 - Present',
//             title: 'Freelance Web Developer, Stark Technologies, Serbia (Remote)',
//             description: (
//                 <ul className="list-disc pl-4">
//                     <li>Developing diverse projects using React and Next.js</li>
//                     <li>Crafting high-performance, interactive frontend experiences</li>
//                 </ul>
//             ),
//         },
//     ];
//
//     // Connector colors inspired by Image 1
//     const connectorColors = ['#FFD700', '#0000FF', '#800080', '#FFD700']; // Yellow, Blue, Purple, Yellow
//
//     return (
//         <div className=" bg-[red] flex flex-row p-4 ">
//             <div className="mx-5 w-64 h-32 border-b-8  rounded-[5px] border-black relative">
//                 <div className="absolute bottom-0 left-0 w-full h-1/2 border-l-8 rounded-[3px] border-black"></div>
//                 <div className="absolute bottom-0 right-0 w-full h-1/2 border-r-8 rounded-[3px] border-black"></div>
//                 <div>Your content here</div>
//             </div>
//
//             <div className="w-64 h-32 border-t-8 border-black rounded-[3px]   relative">
//                 <div className="absolute top-0 left-0 w-full h-1/2 border-l-8 rounded-[3px]  border-black"></div>
//                 <div className="absolute top-0 right-0 w-full h-1/2 border-r-8 rounded-[3px]  border-black"></div>
//                 <div className="pt-32 w-90 h-90">
//                     <div className="h-30 w-30 bg-[blue]">
//                         hello
//                     </div>
//                 </div>
//             </div>
//
//             {/*{timelineData.map((item, index) => (*/}
//
//             {/*    // In your React component*/}
//             {/*    // In your React component*/}
//
//
//             {/*    // <div className="relative p-6 bg-white shadow-lg rounded-lg">*/}
//             {/*    //     /!* Content *!/*/}
//             {/*    //     <h2 className="text-xl font-bold text-gray-800">Half Transparent Border</h2>*/}
//             {/*    //     <p className="text-gray-600 mt-2">*/}
//             {/*    //         This box has a border where the first half is transparent and the second half is colored.*/}
//             {/*    //     </p>*/}
//             {/*    //*/}
//             {/*    //     /!* Half transparent, half colored border *!/*/}
//             {/*    //     <div*/}
//             {/*    //         className="absolute inset-y-0 left-[-15px] w-5"*/}
//             {/*    //         style={{*/}
//             {/*    //             background: "linear-gradient(to bottom, transparent 50%, #3b82f6 50%)",*/}
//             {/*    //         }}*/}
//             {/*    //     ></div>*/}
//             {/*    // </div>*/}
//
//             {/*    // <Fragment key={index}>*/}
//             {/*    //     /!* Timeline Item *!/*/}
//             {/*    //     <div className="bg-gray-100 rounded-lg shadow-md p-4 w-1/5">*/}
//             {/*    //         <h3 className="text-xl font-bold text-gray-800">{item.duration}</h3>*/}
//             {/*    //         <p className="text-lg text-gray-600 mt-1">{item.title}</p>*/}
//             {/*    //         <div className="text-sm text-gray-500 mt-2">{item.description}</div>*/}
//             {/*    //     </div>*/}
//             {/*    //     /!* Connector *!/*/}
//             {/*    //     {index < timelineData.length - 1 && (*/}
//             {/*    //         <svg*/}
//             {/*    //             className="w-1/5 h-20"*/}
//             {/*    //             viewBox="0 0 100 50"*/}
//             {/*    //             preserveAspectRatio="none"*/}
//             {/*    //         >*/}
//             {/*    //             <path*/}
//             {/*    //                 d={index % 2 === 0 ? 'M 0 25 Q 50 0 100 25' : 'M 0 25 Q 50 50 100 25'}*/}
//             {/*    //                 stroke={connectorColors[index]}*/}
//             {/*    //                 strokeWidth="2"*/}
//             {/*    //                 fill="none"*/}
//             {/*    //             />*/}
//             {/*    //             <circle cx="0" cy="25" r="4" fill={connectorColors[index]} />*/}
//             {/*    //             <circle cx="100" cy="25" r="4" fill={connectorColors[index]} />*/}
//             {/*    //         </svg>*/}
//             {/*    //     )}*/}
//             {/*    // </Fragment>*/}
//             {/*))}*/}
//         </div>
//     );
// };
//
// export default Timeline;