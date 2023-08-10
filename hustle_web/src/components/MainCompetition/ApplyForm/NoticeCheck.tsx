import React, { useState } from 'react';
import * as C from './Styles';
import TopArrow from '../../../assets/svg/competition_arrow-top.svg';
import BottomArrow from '../../../assets/svg/competition_arrow-bottom.svg';
import CheckboxOn from '../../../assets/svg/competition_check.svg';
import CheckboxOff from '../../../assets/svg/competition_check-none.svg';
import { NoticeCheckProps } from './ApplyFormProps';

const NoticeCheck = ({ onCheck }: NoticeCheckProps) => {
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
        <C.ApplySubtitleText>대회 주의사항</C.ApplySubtitleText>
        <C.CaptionText>주의사항을 확인했습니다.</C.CaptionText>

        <C.CheckboxContainer>
          <img
            src={isChecked ? CheckboxOn : CheckboxOff}
            alt='checkbox'
            onClick={handleCheckboxChange}
          />
        </C.CheckboxContainer>
      </C.ApplyRowContainer>
      <C.ArrowBox>
        <img
          src={isOpen ? TopArrow : BottomArrow}
          alt='Arrow'
          onClick={toggleDropdown}
        />
      </C.ArrowBox>
      {isOpen && <C.NoticeBox>대회 주의 사항</C.NoticeBox>}
    </>
  );
};

export default NoticeCheck;
