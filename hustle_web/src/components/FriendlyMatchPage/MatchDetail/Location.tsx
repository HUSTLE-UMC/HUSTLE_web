import React, { useEffect } from 'react';
import * as S from './Styles';
import { useRecoilValue } from 'recoil';
import { matchSelector } from '../../../recoil/friendlyMatchPage/selectors';

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const Location = () => {
  const match = useRecoilValue(matchSelector);
  const location = match.location.coordinates;
  const value = match.locationAddress;
  console.log(value, location);
  const newScript = (src: string) => {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.addEventListener('load', () => {
        resolve();
      });
      script.addEventListener('error', (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    const apiKey = process.env.REACT_APP_KAKAOMAP_KEY;
    const myScript = newScript(
      `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services`
    );
    myScript.then(() => {
      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(location[0], location[1]),
          level: 3
        };
        const map = new kakao.maps.Map(mapContainer, options);
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(value, function (result: any, status: any) {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            const marker = new kakao.maps.Marker({
              map: map,
              position: coords
            });
            const infowindow = new kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">' +
                value +
                '</div>'
            });
            infowindow.open(map, marker);
            map.setCenter(coords);
          }
        });
      });
    });
  }, [value]);
  return (
    <>
      <S.LocationBox id='map'></S.LocationBox>
    </>
  );
};

export default Location;
