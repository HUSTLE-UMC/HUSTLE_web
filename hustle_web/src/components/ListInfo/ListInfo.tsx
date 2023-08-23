import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ListInfoProps } from './ListInfoProps';
import * as L from './Styles';

const ListInfo: React.FC<ListInfoProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (title === 'Hot 대회') {
      navigate('/competitions');
    } else if (title === '교류전') {
      navigate('/friendly');
    } else if (title === '전체 순위') {
      navigate('/ranking');
    } else {
      // 기본적으로 /competitions로 이동
      navigate('/competitions');
    }
  };

  return (
    <L.Container>
      <L.TitleLabel>{title}</L.TitleLabel>
      <L.NavigateLabel onClick={handleNavigate}>더 보러가기</L.NavigateLabel>
    </L.Container>
  );
};

export default ListInfo;
