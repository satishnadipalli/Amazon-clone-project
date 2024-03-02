import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const CatgoryCoursal = () => {
  const categoery =['All','Amazon','Fashion','Computers','Home'];
  return (
    <div className=' flex justify-center w-full'>
      <div className='w-11/12 bg-white p-5  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] '>
        <Swiper 
    loop={false}
    slidesPerView={5}
    spaceBetween={0}
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    autoplay={{ delay: 2000, disableOnInteraction: false,clickable:true }}
    navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
    }}
    className='flex justify-around w-full'
>
            
    {
        (Array.from({length:5},(_,i)=>`images/category_${i+0}.jpg`))
            .map((elment,index)=>{
                return(
                    <SwiperSlide key={index} className=' w-32 h-32 sm:w-20 flex justify-center items-center'>
                            <Link to={`/productCategoery/${categoery[index]}`} >
                                <img src={elment} alt="" className='w-32 h-32' />
                            </Link>
                    </SwiperSlide>
                )
            })
    }
        </Swiper>
      </div>
    </div>
  )
}

export default CatgoryCoursal
