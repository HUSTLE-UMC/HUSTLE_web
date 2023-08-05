import React, { useRef, useEffect } from 'react';
import SwiperClass from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { SwiperProps } from './SwiperProps';
import * as S from './Styles';

const Swiper: React.FC<SwiperProps> = ({ images = [], pagination }) => {
  const swiperContainerRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (swiperContainerRef.current) {
      swiperRef.current = new SwiperClass(swiperContainerRef.current, {
        pagination: pagination ? { clickable: true } : false
        // 여기에 추가적인 Swiper.js 옵션을 설정할 수 있습니다.
      });
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, [pagination]);

  return (
    <S.SwiperContainer ref={swiperContainerRef}>
      <div className='swiper-wrapper'>
        {images.map((imageUrl, index) => (
          <S.SwiperSlide key={index}>
            <S.SwiperImage
              src={imageUrl}
              alt={`Image ${index}`}
              className='swiper-image'
            />
          </S.SwiperSlide>
        ))}
      </div>
      {pagination && <S.SwiperPagination className='swiper-pagination' />}
    </S.SwiperContainer>
  );
};

export default Swiper;
