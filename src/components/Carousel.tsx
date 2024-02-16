import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import React, { useState, useEffect } from 'react'
// // import { ChevronLeft, ChevronRight } from "react-feather"
//
// const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
//     const [curr, setCurr] = useState(0)
//
//     const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
//
//     const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
//
//     useEffect(() => {
//         if (!autoSlide) return
//         const slideInterval = setInterval(next, autoSlideInterval)
//         return () => clearInterval(slideInterval)
//     }, [])
//
//     return (
//         <div className='overflow-hidden relative'>
//             <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
//                 {slides}
//             </div>
//             <div className="absolute inset-0 flex items-center justify-between p-4">
//                 <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
//                     {/*<ChevronLeft />*/}
//                 </button>
//                 <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
//                     {/*<ChevronRight />*/}
//                 </button>
//             </div>
//             <div className='absolute bottom-4 right-0 left-0'>
//                 <div className='flex items-center justify-center gap-2'>
//                     {slides.map((s, i) => (
//                         <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//
//     )
// }
//
// export default Carousel

import {FC} from "react";
import SlickSlider from "react-slick";
import {LazyImage} from "react-lazy-images";
import Loader from "./Loader.tsx";


const Carousel: FC<{ slides: string[] }> = ({slides}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <SlickSlider  {...settings}>
            {
                slides.map((item) =>
                    (<div key={item} className="h-full mt-5">
                        <div
                            className="flex container   h-[600px] rounded-lg items-center justify-center relative overflow-hidden">
                            <LazyImage
                                src={item}
                                placeholder={(props: any) => (
                                    <div
                                        ref={props.ref}
                                        className="scale-1 group-hover:scale-[1.1] transition-all duration-700"
                                    >
                                        <Loader width="1000px" height="300px"/>
                                    </div>
                                )}
                                actual={(props: any) => (
                                    <img
                                        className="scale-1 w-full h-full  transition-all duration-300"
                                        {...props.imageProps}
                                    />
                                )}
                            />
                        </div>
                    </div>
                    )
                )
            }

        </SlickSlider>
    );
}

export default Carousel
