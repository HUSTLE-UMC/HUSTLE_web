import React, { useState } from 'react';
import * as A from '../Styles';
import TopArrow from '../../../assets/svg/competition_arrow-top.svg';
import BottomArrow from '../../../assets/svg/competition_arrow-bottom.svg';
import CheckboxOn from '../../../assets/svg/competition_check.svg';
import CheckboxOff from '../../../assets/svg/competition_check-none.svg';
import { PrivacyCheckProps } from './ApplyFormProps';

const PrivacyCheck = ({ onCheck }: PrivacyCheckProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [hasConfirmed, setHasConfirmed] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!hasConfirmed) {
      setHasConfirmed(true);
    }
  };

  const handleCheckboxChange = () => {
    if (hasConfirmed) {
      setIsChecked(!isChecked);
      onCheck(!isChecked); // 체크 여부를 부모 컴포넌트로 전달
    }
  };

  return (
    <>
      <A.ApplyRowContainer>
        <A.ApplySubtitleText>개인정보수집 동의</A.ApplySubtitleText>
        <A.CaptionText>개인정보수집에 동의합니다.</A.CaptionText>

        <A.CheckboxContainer2>
          <img
            src={isChecked ? CheckboxOn : CheckboxOff}
            alt='checkbox'
            onClick={handleCheckboxChange}
          />
        </A.CheckboxContainer2>
      </A.ApplyRowContainer>

      <A.ArrowBox>
        <img
          src={isOpen ? TopArrow : BottomArrow}
          alt='Arrow'
          onClick={toggleDropdown}
        />
      </A.ArrowBox>
      {isOpen && <A.NoticeBox>개인정보수집동의 내용</A.NoticeBox>}
    </>
  );
};

export default PrivacyCheck;
