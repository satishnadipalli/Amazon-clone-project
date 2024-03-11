import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Courosal = () => {
  return (
    <div className='bg-gradient-to-b mt-12 z-0 mb-5'>
      <div className=''>{/*bg-gradient-to-b from-stone-800*/ }
      <div className='swiper-navigation-container overflow-hidden'>
        
        </div >
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false,clickable:true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
        >
          <SwiperSlide>
            <img src={"./public/images/carousel_1.jpg"} alt="no image found" className='w-[89%] h-80 m-auto z-0 rounded-xl' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"./public/images/carousel_2.jpg"} alt="no image found" className='w-[85%] h-80 m-auto z-0 rounded-xl' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"./public/images/carousel_3.jpg"} alt="no image found" className='w-[85%] h-80 m-auto z-0 rounded-xl' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"./public/images/carousel_4.jpg"} alt="no image found" className='w-[85%] h-80 m-auto z-0 rounded-xl' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"./public/images/carousel_5.jpg"} alt="no image found" className='w-[85%] h-80 m-auto z-0 rounded-xl' />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <div className='w-full h-80  -mb-100'>

      </div> */}
    </div>
  );
}

export default Courosal;


