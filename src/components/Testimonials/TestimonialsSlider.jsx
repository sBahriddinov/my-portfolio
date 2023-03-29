import React from 'react';

// import testimonials data
import { testimonials } from '../../data';

// import swiper react components 
import {Swiper, SwiperSlide} from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './../../swiper.css'

// import required moduls
import {Autoplay, Pagination, Navigation, Thumbs} from 'swiper';

const TestimonialsSlider = () => {
  
  return (
    <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
            {testimonials.map((item, index)=> {
                const {authorImg, authorText, authorName, authorPosition} = item;
                return(
                    <SwiperSlide key={index}>
                        <div className='flex flex-col lg:flex-row gap-12 lg:gap-32'>
                            <div className='w-48 h-48 lg:w-[328px] lg:h-[328px]'>
                                <img src={authorImg} alt="" className='rounded-2xl'/>
                            </div>
                            <div className="flex flex-col max-w-3xl">
                                <h5 className='font-body text-2xl mb-8 italic font-normal'>{authorText}</h5>
                                <div>
                                    <p className='text-lg text-accent'>
                                        {authorName}
                                    </p>
                                    <p>
                                        {authorPosition}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </>
  )
}

export default TestimonialsSlider