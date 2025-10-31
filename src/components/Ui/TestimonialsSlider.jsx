'use client'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '@smastrom/react-rating/style.css'
import { Rating, Star } from '@smastrom/react-rating';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import Image from 'next/image';
import MotionSection from '../Common/MotionSection';

const TestimonialsSlider = ({ testimonials }) => {

  return (
    /* ---------------Testimonials Slider Section-------------- */
    <MotionSection className='-mt-5'>
      {/* ------------------Swiper Section-------------------- */}
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        initialSlide={0}
        modules={[Navigation, Autoplay, FreeMode]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1, centeredSlides: false },
          768: { slidesPerView: 1.5, centeredSlides: true },
          1024: { slidesPerView: 1.9, centeredSlides: true },
        }}
      >
        {/* -----------------Map Testimonials----------------- */}
        {testimonials.map((testimonial) => (
          /* -------------Swiper Slider Container-------------- */
          <SwiperSlide className='relative pt-10' key={testimonial?._id}>

            {/* -----------------Icon Container--------------- */}
            <div className='absolute top-2 left-10 bg-bg-dark border border-bg-white-overlay rounded-full p-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 48 48"><path fill="none" stroke='currentColor' strokeWidth={0.5} fillRule="evenodd" d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185" clipRule="evenodd"></path></svg>
            </div>

            {/* ---------Testimonial Card Container----------- */}
            <div className='min-h-[350px] space-y-3 border border-bg-white-overlay-deep rounded-xl p-5 pt-10 md:p-10 md:pt-10 lg:p-10 lg:pt-14'>
              {/* ------------------Card Header--------------- */}
              <div className='flex flex-col md:flex-row lg:flex-row justify-between gap-2'>
                <div className='flex items-center gap-3'>
                  <Image width={50} height={50} className='border-2 border-bg-white-overlay-deep rounded-full' src={testimonial?.image} alt='Client Image'></Image>
                  <div>
                    <h3 className='font-bold text-2xl'>{testimonial?.name}</h3>
                    <p className='font-rubik text-gray-light'>{testimonial?.designation}</p>
                  </div>
                </div>
                <div>
                  <Rating itemStyles={{ itemShapes: Star, activeFillColor: '#FF014F', inactiveFillColor: "#d1d5db" }} style={{ maxWidth: 80 }} value={testimonial?.rating}></Rating>
                </div>
              </div>
              {/* ------------------Card Body------------------ */}
              <p className='font-medium text-2xl md:text-2xl lg:text-3xl'>{testimonial?.testimonial}</p>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </MotionSection>
  );
};

export default TestimonialsSlider;