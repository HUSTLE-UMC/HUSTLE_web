import React from 'react';
import * as C from './ClubStyle';
import { useState } from 'react';
import { useRecoilValue, useRecoilState } from "recoil";
import {getLectureSelector} from '../../../recoil/community';
import {currentPageState, totalPageState} from '../../../recoil/pagenation';

const ClubMain = () => {
  const [inputValue, setInputValue] = useState('');
  //const clubList = useRecoilValue(getLectureSelector);
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

export default ClubMain;
