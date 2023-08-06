import React, { useState, useEffect } from 'react';
import * as C from './Styles';
import TextInput from '../../components/TextInput/TextInput';
import UploadImg from '../../assets/svg/competition-img.svg';
import LeftCompetition from './LeftCompetition';
import RightCompetition from './RightCompetition';
import SubmitButton from '../../components/FriendlyMatchPage/SubmitButton/SubmitButton';
import LogoImg from '../../assets/images/competition_logoimg.png';
import {
  LeftCompetitionProps,
  RightCompetitionProps
} from '../../constants/interfaces';

const MainCompetition = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const [leftCompetitionData, setLeftCompetitionData] =
    useState<LeftCompetitionProps | null>(null);

  const [rightCompetitionData, setRightCompetitionData] =
    useState<RightCompetitionProps | null>(null);

  const handleLeftDataChange = (data: LeftCompetitionProps) => {
    setLeftCompetitionData(data);
  };

  const handleRightDataChange = (data: RightCompetitionProps) => {
    setRightCompetitionData(data);
  };

  const handleMainFormSubmit = () => {
    console.log('제출');
  };

  return (
    <C.CompetitonContainer>
      <C.RowContainer>
        <img src={LogoImg} alt='로고' width='20%' />
        <C.TitleText>대회 개설</C.TitleText>
      </C.RowContainer>
      <C.SubtitleText>대회 이름</C.SubtitleText>
      <TextInput
        size='medium'
        holder='개설하고자 하는 대회 이름을 입력하세요'
      />
      <C.SubtitleText>주최</C.SubtitleText>
      <TextInput size='medium' holder='동아리/단체명을 입력하세요' />
      <C.SubtitleText>대회 포스터</C.SubtitleText>
      <C.CenterWrapper>
        {selectedImage ? (
          <div>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt='업로드 이미지'
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <button
              onClick={handleRemoveImage}
              style={{ border: 'none', background: 'none', cursor: 'pointer' }}
            >
              <span role='img' aria-label='remove'>
                ❌
              </span>
            </button>
          </div>
        ) : (
          <label>
            <input
              type='file'
              style={{ display: 'none' }}
              accept='image/*'
              onChange={handleImageChange}
            />
            <img
              src={UploadImg}
              alt='업로드 이미지'
              style={{ cursor: 'pointer' }}
            />
          </label>
        )}
      </C.CenterWrapper>
      <C.RowContainer>
        <LeftCompetition onDataChange={handleLeftDataChange} />
        <RightCompetition onDataChange={handleRightDataChange} />
      </C.RowContainer>
      <C.SubtitleText>후원</C.SubtitleText>
      <TextInput size='medium' holder='후원 단체명을 입력하세요' />
      <C.RightWrapper>
        <SubmitButton label='대회 등록' small onClick={handleMainFormSubmit} />
      </C.RightWrapper>
    </C.CompetitonContainer>
  );
};

export default MainCompetition;
