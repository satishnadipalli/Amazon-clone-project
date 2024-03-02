import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Courosal = () => {
  return (
    <div className='bg-gradient-to-b from-stone-800 z-0'>
      <div className='bg-gradient-to-b from-stone-800'>
      <div className='swiper-navigation-container'>
        {/* <div className='swiper-button-next  w-20'></div>
        <div className='swiper-button-prev'></div> */}
        </div >
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false,clickable:true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
        >
          <SwiperSlide>
            <img src={"./public/images/carousel_1.jpg"} alt="no image found" className='w-[91%] h-96 m-auto z-0' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"./public/images/carousel_2.jpg"} alt="no image found" className='w-[91%] h-96 m-auto z-0' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"./public/images/carousel_3.jpg"} alt="no image found" className='w-[91%] h-96 m-auto z-0' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"./public/images/carousel_4.jpg"} alt="no image found" className='w-[91%] h-96 m-auto z-0' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"./public/images/carousel_5.jpg"} alt="no image found" className='w-[91%] h-96 m-auto z-0' />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='w-full h-72  -mb-100'>

      </div>
    </div>
  );
}

export default Courosal;


