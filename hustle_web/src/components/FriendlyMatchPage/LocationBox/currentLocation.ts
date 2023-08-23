import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { currentLocationState } from '../../../recoil/friendlyMatchPage/states';

// 현재 위치 구하는 함수
const currentLocation = () => {
  const [location, setLocation] = useRecoilState(currentLocationState);
  useMemo(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    function success(position: any) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    }
    function error() {
      setLocation({
        lat: 37.5204082,
        lng: 126.887799
      });
    }
  }, [navigator.geolocation.getCurrentPosition]);

  return location;
};

export default currentLocation;
