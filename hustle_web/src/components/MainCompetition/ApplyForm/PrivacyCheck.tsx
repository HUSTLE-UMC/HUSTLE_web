import React, { useState } from 'react';
import * as C from './Styles';
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
      <C.ApplyRowContainer>
        <C.ApplySubtitleText>개인정보수집 동의</C.ApplySubtitleText>
        <C.CaptionText>개인정보수집에 동의합니다.</C.CaptionText>

        <C.CheckboxContainer2>
          <img
            src={isChecked ? CheckboxOn : CheckboxOff}
            alt='checkbox'
            onClick={handleCheckboxChange}
          />
        </C.CheckboxContainer2>
      </C.ApplyRowContainer>

      <C.ArrowBox>
        <img
          src={isOpen ? TopArrow : BottomArrow}
          alt='Arrow'
          onClick={toggleDropdown}
        />
      </C.ArrowBox>
      {isOpen && <C.NoticeBox>개인정보수집동의 내용</C.NoticeBox>}
    </>
  );
};

export default PrivacyCheck;
