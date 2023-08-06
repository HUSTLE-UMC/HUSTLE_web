import React from 'react';
import { HomeContainer, HotContainer, ListBox, MatchContainer } from './Styles';
import Swiper from '../../components/Swiper/Swiper';
import banner1 from '../../assets/svg/banner1.svg';
import banner2 from '../../assets/svg/banner2.svg';
import banner3 from '../../assets/svg/banner3.svg';
import ListInfo from '../../components/ListInfo/ListInfo';
import FriendlyMatchList from '../../components/FriendlyMatchPage/FriendlyMatchList/FriendlyMatchList';
import image from '../../assets/images/TempLogo.png';
import { useRecoilValue } from 'recoil';
import { clubListsState } from '../../recoil/friendlyMatchPage/states';

const HomePage = () => {
  // const images = [banner1, banner2, banner3];
  const images = [banner1];
  const clubs = useRecoilValue(clubListsState);

  return (
    <>
      <HomeContainer>
        <Swiper images={images} pagination={true} />
        <HotContainer>
          <ListInfo title='Hot 게시물' />
        </HotContainer>
        <MatchContainer>
          <ListInfo title='교류전' />
          <ListBox>
            {clubs.map((v) => (
              <FriendlyMatchList
                key={v.id}
                id={v.id}
                img={image}
                sport={v.sport}
                title={v.title}
                date={v.date}
                location={v.location}
              />
            ))}
          </ListBox>
        </MatchContainer>
      </HomeContainer>
    </>
  );
};

export default HomePage;
