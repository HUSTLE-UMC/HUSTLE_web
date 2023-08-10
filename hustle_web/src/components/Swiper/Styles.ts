import styled from 'styled-components';

export const SwiperContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background-color: #61dafb;
`;

export const SwiperSlide = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const SwiperImage = styled.img`
  width: 100%;
  height: 40rem;
  max-height: 100%;
  object-fit: cover;
`;

export const SwiperPagination = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 10;
`;
