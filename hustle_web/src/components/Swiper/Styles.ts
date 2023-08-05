import styled from 'styled-components';

export const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SwiperSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SwiperImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
`;

export const SwiperPagination = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 10;
`;
