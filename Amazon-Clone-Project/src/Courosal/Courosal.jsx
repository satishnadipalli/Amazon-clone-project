import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Courosal = () => {
  return (
    <>
      <div className='relative'>
      <div className='swiper-navigation-container'>
        <div className='swiper-button-next  w-20'></div>
        <div className='swiper-button-prev'></div>
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
            <img src={"./public/images/carousel_1.jpg"} alt="no image found" className='w-full h-96' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"./public/images/carousel_2.jpg"} alt="no image found" className='w-full h-96' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"./public/images/carousel_3.jpg"} alt="no image found" className='w-full h-96' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"./public/images/carousel_4.jpg"} alt="no image found" className='w-full h-96' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"./public/images/carousel_5.jpg"} alt="no image found" className='w-full h-96' />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='w-full h-72 bg-gradient-to-b from-stone-800 -mb-100'>

      </div>
    </>
  );
}

export default Courosal;


