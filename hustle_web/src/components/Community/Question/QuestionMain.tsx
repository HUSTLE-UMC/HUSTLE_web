import { useEffect, useState } from 'react';
import * as Q from './QuestionStyle';
import { useRecoilValue, useRecoilState } from 'recoil';
import {getQuestionSelector} from '../../../recoil/community';
import QuestionList from './QuestionList';

const QuestionMain = () => {
  const postList = useRecoilValue(getQuestionSelector);
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]); //검색 결과 저장

  //검색어 기능
  const handleInputChange = (value: string) => {
    setSearchQuery(value.toLowerCase());
  }

  const searchPosts = () => {
    const filter = postList.filter((post:any) => 
      post.title.toLowerCase().includes(searchQuery)
    );
    setFilteredPosts(filter);
    console.log('검색어: ', searchQuery);
  }
  
  const handleEnterKey = () => {
    searchPosts();
  }

  const handleDetailClick = () => {
    setIsDetailVisible(!isDetailVisible);
  }

  const handleQuestionClick = (id:any) => {
    setSelectedQuestion(id);
  };

  useEffect(() => {
    if(postList.data) {
      setLoading(false);
    }
  },[postList.data]);

  return (
    <>
    <Q.Container>
      <div>
        <Q.Search 
          size='small' 
          type='text'
          value={searchQuery}
          onChange={handleInputChange}
          onEnter={handleEnterKey}
          placeholder='궁금한 정보를 입력하세요'
          />
      </div>
      <Q.FirstDiv>
        <Q.Border>[ 질문 게시판 ]</Q.Border>
        <Q.ButtonWrap><Q.WriteButton to='/community/question/write'>글쓰기</Q.WriteButton></Q.ButtonWrap>
      </Q.FirstDiv>
      {/* <div>
        <QuestionList posts={filteredPosts.length > 0 ? filteredPosts : postList.data} loading={loading}/>
      </div> */}
    </Q.Container>
    </>
  )
}

export default QuestionMain;