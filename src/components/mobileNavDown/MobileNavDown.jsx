
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';



// import './styles.css';

// import required modules
import {Scrollbar } from 'swiper/modules';

import { AiOutlineHome, AiOutlineShop } from 'react-icons/ai';
import { FiHeart, FiMenu, FiShoppingCart } from 'react-icons/fi';
import { LuUser2 } from 'react-icons/lu';
import { TiArrowShuffle } from 'react-icons/ti';

// eslint-disable-next-line react/prop-types
const MobileNavDown = ({className}) => {
    return (
        <div className={className}>
            <Swiper
        slidesPerView={4}
        centeredSlides={false}
        slidesPerGroupSkip={4}
        grabCursor={true}
        
        breakpoints={{
          400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
      
        
        modules={[Scrollbar]}
        className="mySwiper"
      >
       <SwiperSlide>
            <section className='flex flex-col justify-center items-center pb-4 pt-3'>
            <AiOutlineHome className='text-[20px]' />
                <p className='text-xs font-semibold'>Home</p>
            </section>
               
        </SwiperSlide>
       <SwiperSlide>
            <section className='flex flex-col justify-center items-center pb-4 pt-3'>
            <FiMenu className='text-[20px]' />
                <p className='text-xs font-semibold'>Menu</p>
            </section>
               
        </SwiperSlide>
       <SwiperSlide>
            <section className='flex flex-col justify-center items-center pb-4 pt-3'>
            <AiOutlineShop className='text-[20px]' />
                <p className='text-xs font-semibold'>Shop</p>
            </section>
               
        </SwiperSlide>
       <SwiperSlide>
            <section className='flex flex-col justify-center items-center pb-4 pt-3'>
            <FiShoppingCart className='text-[20px]' />
                <p className='text-xs font-semibold'>Cart</p>
            </section>
               
        </SwiperSlide>
       <SwiperSlide>
            <section className='flex flex-col justify-center items-center pb-4 pt-3'>
            <LuUser2 className='text-[20px]' />
                <p className='text-xs font-semibold'>My Account</p>
            </section>
               
        </SwiperSlide>
       <SwiperSlide>
            <section className='flex flex-col justify-center items-center pb-4 pt-3'>
            <FiHeart className='text-[20px]' />
                <p className='text-xs font-semibold'>Wishlist</p>
            </section>
               
        </SwiperSlide>
       <SwiperSlide>
            <section className='flex flex-col justify-center items-center pb-4 pt-3'>
            <TiArrowShuffle  className='text-[20px]' />
                <p className='text-xs font-semibold'>Compare</p>
            </section>
               
        </SwiperSlide>
        
      
        
      </Swiper>
        </div>
    );
};

export default MobileNavDown;