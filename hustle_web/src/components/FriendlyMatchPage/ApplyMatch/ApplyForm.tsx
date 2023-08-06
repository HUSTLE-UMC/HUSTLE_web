import * as S from './Styles';
import TextInput from '../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import DropDown from '../../DropDown/DropDown';
import SportsMenu from '../../SportsMenu/SportsMenu';

export const ApplyForm = () => {
  return (
    <>
      <SportsMenu />
      <S.ContentLayout>
        <S.SideContainer>
          <DropDown index={1} />
        </S.SideContainer>
        <S.FormLayout>
          <S.TitleBox>동아리 명</S.TitleBox>
          <TextInput size='l' holder='동아리 명을 입력하세요'></TextInput>
          <S.TitleBox>대표자 연락처</S.TitleBox>
          <S.InputBox>
            <TextInput size='s' holder='이름'></TextInput>
            <TextInput size='s' holder='연락처'></TextInput>
          </S.InputBox>
          <SubmitButton
            label='신청하기'
            onClick={() => {
              alert('교류전 신청이 완료되었습니다.');
            }}
          />
        </S.FormLayout>
        <S.SideContainer />
      </S.ContentLayout>
    </>
  );
};

export default ApplyForm;
