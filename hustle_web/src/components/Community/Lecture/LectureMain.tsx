import React, {useState} from 'react';
import * as L from './LectureStyle';
import { useRecoilValue, useRecoilState } from "recoil";
import {getLectureSelector} from '../../../recoil/community';
import {currentPageState, totalPageState} from '../../../recoil/pagenation';


const ClubMain = () => {
  const [inputValue, setInputValue] = useState('');
  //const lectureList = useRecoilValue(getLectureSelector);
  const [currentPage, setCurrnetPage] = useRecoilState(currentPageState);
  const totalPage = useRecoilValue(totalPageState);

  const handleInputChange = (value:string) => {
    setInputValue(value);
  }

  const handlePageClick = (pageNumber : any) => {
    setCurrnetPage(pageNumber);
  }

  return (
    <>
    <div>
      <div>
        <L.Search
          size='small'
          type='text'
          value={inputValue}
          onChange={handleInputChange}/>
      </div>
      <div>[ 강의 영상 ]</div>
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
