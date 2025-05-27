import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import "swiper/css";
import img_2 from '../assets/images/png/img-2.png';
import img_3 from '../assets/images/png/img-3.png';
import img_4 from '../assets/images/png/img-4.png';
import img_5 from '../assets/images/png/img-5.jpg';

const Carousel = () => {
    return (
        <>
            <div className="flex justify-center items-center py-45">
                <div className="max-w-[1140px] px-4 w-full">
                    <h2 className='font-mono text-4xl pb-5 text-center'>Swiper</h2>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        breakpoints={{
                            540: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        <SwiperSlide className='w-full'>
                            <img className='w-full h-auto' src={img_2} alt="img" />
                            <h2 className='font-mono pt-3 text-xl font-semibold pl-2'>Darlene Robertson</h2>
                            <p className='font-mono text-lg font-medium pl-2'>CEO & Founder</p>
                        </SwiperSlide>
                        <SwiperSlide className='w-full'>
                            <img className='w-full h-auto' src={img_3} alt="img" />
                            <h2 className='font-mono pt-3 text-xl font-semibold pl-2'>Brooklyn Simmons</h2>
                            <p className='font-mono text-lg font-medium pl-2'>CEO & Founder</p>
                        </SwiperSlide>
                        <SwiperSlide className='w-full'>
                            <img className='w-full h-auto' src={img_4} alt="img" />
                            <h2 className='font-mono pt-3 text-xl font-semibold pl-2'>Cameron Williamson</h2>
                            <p className='font-mono text-lg font-medium pl-2'>CEO & Founder</p>
                        </SwiperSlide>
                        <SwiperSlide className='w-full'>
                            <img className='w-full h-auto' src={img_5} alt="img" />
                            <h2 className='font-mono pt-3 text-xl font-semibold pl-2'>Nicolas Malezh</h2>
                            <p className='font-mono text-lg font-medium pl-2'>CEO & Founder</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Carousel;
