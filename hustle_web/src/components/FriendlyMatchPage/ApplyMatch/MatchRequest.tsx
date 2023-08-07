import React from 'react';
import * as S from './Styles';
import MyClubList from '../MyClubList/MyClubList';
import TextInput from '../../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import {
  selectedState,
  submitTypeState
} from '../../../recoil/friendlyMatchPage/states';
import { useRecoilState } from 'recoil';

const MatchRequest = () => {
  const [types, setTypes] = useRecoilState(submitTypeState);
  const [isSelected, setIsSelected] = useRecoilState(selectedState);
  const handleClick = (id: number) => {
    setTypes(
      types.map((t) => {
        return t.id === id
          ? { ...t, isSubmitted: true }
          : { ...t, isSubmitted: false };
      })
    );
    setIsSelected(true);
  };
  return (
    <>
      {
        <>
          <S.TitleContainer>동아리 명</S.TitleContainer>
          <MyClubList clubs={['동아리 1', '동아리 2']} />
          <S.TitleContainer>대표자 연락처</S.TitleContainer>
          <S.InputContainer>
            <TextInput size='small' holder='이름' />
            <TextInput size='medium' holder='010-XXXX-XXXX' />
          </S.InputContainer>
          {!isSelected && (
            <S.ButtonContainer>
              <SubmitButton label='신청하기' onClick={() => handleClick(0)} />
            </S.ButtonContainer>
          )}
        </>
      }
    </>
  );
};

export default MatchRequest;
