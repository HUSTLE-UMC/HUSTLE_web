import React from 'react';
import { HomeContainer, HotContainer } from './Styles';
import Swiper from '../../components/Swiper/Swiper';
import banner1 from '../../assets/svg/banner1.svg';
import banner2 from '../../assets/svg/banner2.svg';
import banner3 from '../../assets/svg/banner3.svg';
import ListInfo from '../../components/ListInfo/ListInfo';

const HomePage = () => {
  const images = [banner1, banner2, banner3];
  return (
    <>
      <HomeContainer>
        <Swiper images={images} pagination={true} />
        <HotContainer>
          <ListInfo title='Hot 게시물' />
        </HotContainer>
      </HomeContainer>
    </>
  );
};

export default HomePage;
