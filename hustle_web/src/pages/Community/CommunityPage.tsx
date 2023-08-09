import React, {useState} from 'react';
import * as C from './CommunityMainStyle';
import * as Q from '../../components/Community/Question/QuestionStyle'

const CommunityPage = () => {
  const [inputValue, setInputValue] = useState('');
  //const communityList = useRecoilValue(getCommunitySelector);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };


  return (
    <>
    <C.Layout>
      <C.Container>
        <Q.FirstDiv>
          <Q.Border>[ 질문 게시판 ]</Q.Border>
          <Q.ButtonWrap><Q.WriteButton to='/community/question'>더보기</Q.WriteButton></Q.ButtonWrap>
        </Q.FirstDiv>
        {/* <div>
          <QuestionList posts={filteredPosts.length > 0 ? filteredPosts : postList.data} loading={loading}/>
        </div> */}
      </C.Container>
      <C.Container>
      <Q.FirstDiv>
          <Q.Border>[ 동아리 게시판 ]</Q.Border>
          <Q.ButtonWrap><Q.WriteButton to='/community/club'>더보기</Q.WriteButton></Q.ButtonWrap>
        </Q.FirstDiv>
      </C.Container>
    </C.Layout>
    </>
  )
}

export default CommunityPage;