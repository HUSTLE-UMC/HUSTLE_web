import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ListInfoProps } from './ListInfoProps';
import * as L from './Styles';

const ListInfo: React.FC<ListInfoProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/more-contests');
  };

  return (
    <L.Container>
      <L.TitleLabel>{title}</L.TitleLabel>
      <L.NavigateLabel onClick={handleNavigate}>더 보러가기</L.NavigateLabel>
    </L.Container>
  );
};

export default ListInfo;
