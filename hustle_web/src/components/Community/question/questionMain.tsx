import { useState } from 'react';
import * as Q from './questionStyle';
import { useRecoilValue, useRecoilState } from "recoil";
import {getQuestionSelector} from '../../../recoil/community';
import {currentPageState, totalPageState} from '../../../recoil/pagenation'
import List from './questionList';
import {Icon} from '../../../stories/Icons/Icon'


const QuestionMain = () => {
  const [inputValue, setInputValue] = useState('');
  //const questionList = useRecoilValue(getQuestionSelector);
  const [currentPage, setCurrnetPage] = useRecoilState(currentPageState);
  const totalPage = useRecoilValue(totalPageState);
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handlePageClick = (pageNumber : any) => {
    setCurrnetPage(pageNumber);
  }

  const handleDetailClick = () => {
    setIsDetailVisible(!isDetailVisible);
  }

  const handleQuestionClick = (id:any) => {
    setSelectedQuestion(id);
  };

  return (
    <>
    <Q.Container>
      <div>
        <Q.Search 
          size='small' 
          type='text'
          value={inputValue}
          onChange={handleInputChange}/>
      </div>
      <Q.FirstDiv>
        <Q.Border>[ 질문 게시판 ]</Q.Border>
        <Q.ButtonWrap><Q.WriteButton to='/question/write'>글쓰기</Q.WriteButton></Q.ButtonWrap>
      </Q.FirstDiv>
      <div>
        <div><List/></div>
        <div>
          <Icon icon="right" size="1rem" onClick={handleDetailClick}/>
          {isDetailVisible && (
            <div>
              <List/>
            </div>
          )}
        </div>
      </div>
      {/* <div>
        {Array.from({length : totalPage}, (index:number) => (
          <button key={index + 1} onClick={() => handlePageClick(index+1)}>
            {index + 1}
          </button>
        ))}
      </div> */}
    </Q.Container>
    </>
  )
}

export default QuestionMain;