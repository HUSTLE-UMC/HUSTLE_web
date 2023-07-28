import React , {useState} from 'react';
import {Link} from "react-router-dom";
import * as C from './CommunityMainStyle';
import { useRecoilValue, useRecoilState} from "recoil";
import {getQuestionSelector} from '../../recoil/community';
import {currentPageState, totalPageState} from '../../recoil/pagenation';


const CommunityMain = () => {
  const [inputValue, setInputValue] = useState('');
  //const communityList = useRecoilValue(getCommunitySelector);
  const [currentPage, setCurrnetPage] = useRecoilState(currentPageState);
  const totalPage = useRecoilValue(totalPageState);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handlePageClick = (pageNumber : any) => {
    setCurrnetPage(pageNumber);
  }

  return (
    <>
    <div>
      <div>
        <C.Search
          size='small'
          type='text'
          value={inputValue}
          onChange={handleInputChange}/>
      </div>
      {/* <div>
          {Array.from({length : totalPage}, (index:number) => (
            <button key={index + 1} onClick={() => handlePageClick(index+1)}>
              {index + 1}
            </button>
          ))}
      </div> */}
    </div>
    </>
  )
}

export default CommunityMain;
