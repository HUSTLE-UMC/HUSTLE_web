import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as C from './Styles';
import TextInput from './TextInput copy';
import UploadImg from '../../assets/svg/competition-img.svg';
import LeftCompetition from './LeftCompetition';
import RightCompetition from './RightCompetition';
import SubmitButton from '../../components/FriendlyMatchPage/SubmitButton/SubmitButton';
import LogoImg from '../../assets/images/competition_logoimg.png';
import {
  LeftCompetitionProps,
  RightCompetitionProps,
  MainCompetitionProps
} from '../../constants/interfaces';
import { defaultMainCompetition } from '../../constants/defaultFormOption';
import FormRequirements from '../../constants/FormRequirements';
const MainCompetition = () => {
  const { contentRequirements } = FormRequirements;
  const defaultMainValue = defaultMainCompetition;
  const {
    register,
    formState: { errors }
  } = useForm<MainCompetitionProps>({
    defaultValues: defaultMainValue
  });

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
        type='competitionname'
        {...register('competitionname', contentRequirements)}
      />
      {errors.competitionname && (
        <C.Error>{errors.competitionname.message}</C.Error>
      )}
      <C.SubtitleText>주최</C.SubtitleText>
      <TextInput
        size='medium'
        holder='동아리/단체명을 입력하세요'
        type='teamname'
        {...register('teamname', contentRequirements)}
      />
      {errors.teamname && <C.Error>{errors.teamname.message}</C.Error>}

      <C.SubtitleText>대회 포스터</C.SubtitleText>
      <C.CenterWrapper>
        {selectedImage ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>{selectedImage.name}</span>
            <C.CancleImageBtn onClick={handleRemoveImage}>
              <span role='img' aria-label='remove'>
                ❌
              </span>
            </C.CancleImageBtn>
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
      <TextInput
        size='medium'
        holder='후원 단체명을 입력하세요'
        type='support'
        {...register('support', contentRequirements)}
      />
      {errors.support && <C.Error>{errors.support.message}</C.Error>}

      <C.RightWrapper>
        <SubmitButton label='대회 등록' small onClick={handleMainFormSubmit} />
      </C.RightWrapper>
    </C.CompetitonContainer>
  );
};

export default MainCompetition;
