import DropDown from '../../DropDown/DropDown';
import * as M from './Styles';
import SportsMenu from '../../SportsMenu/SportsMenu';
import TextInput from '../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import { Photo } from '../../../stories/Icons/svg';

export const PostMatch = () => {
  return (
    <>
      <SportsMenu />
      <M.PostLayout>
        <M.SideContainer>
          <DropDown index={0} />
        </M.SideContainer>
        <M.PostContainer>
          <div>
            <M.TitleBox>동아리 명</M.TitleBox>
            <TextInput size='l' holder='동아리 명을 입력하세요' />
          </div>
          <div>
            <M.TitleBox>대표자 연락처</M.TitleBox>
            <M.InputBox>
              <TextInput size='s' holder='이름' />
              <TextInput size='s' holder='연락처' />
            </M.InputBox>
          </div>
          <div>
            <M.TitleBox>교류전 제목</M.TitleBox>
            <TextInput size='l' holder='교류전 제목을 입력하세요' />
          </div>
          <div>
            <M.TitleBox>일시</M.TitleBox>
            <TextInput size='l' holder='ex) 2023-01-01' />
          </div>
          <div>
            <M.TitleBox>교류전 위치</M.TitleBox>
            <TextInput size='l' holder='교류전 위치를 입력하세요' />
          </div>
          <M.ImageBox>
            <Photo />
          </M.ImageBox>
          <M.ImageCaption>교류전 위치 사진을 업로드 해주세요</M.ImageCaption>
          <SubmitButton
            label='신청하기'
            onClick={() => alert('신청이 완료되었습니다')}
          />
        </M.PostContainer>
        <M.SideContainer />
      </M.PostLayout>
    </>
  );
};

export default PostMatch;
