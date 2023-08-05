import React from 'react';
import { Link } from 'react-router-dom';
import { ListInfoProps } from './ListInfoProps';
import * as L from './Styles';

const ListInfo: React.FC<ListInfoProps> = ({ title }) => {
  return (
    <L.Container>
      <L.TitleLabel>{title}</L.TitleLabel>
      <L.NavigateLabel>
        <Link to='/more-contests'>더 많은 대회 정보 확인하기</Link>
      </L.NavigateLabel>
    </L.Container>
  );
};

export default ListInfo;
