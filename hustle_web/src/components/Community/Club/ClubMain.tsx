import * as C from './ClubStyle';
import { useState } from 'react';
import emoji from '../../../assets/images/competition_logoimg.png'
import * as Q from '../Question/QuestionStyle';
import MatchMenu from '../Main/MatchMenu';

const ClubMain = () => {
  // const [inputValue, setInputValue] = useState('');
  // // const clubList = useRecoilValue(getLectureSelector);

  // const handleInputChange = (value: string) => {
  //   setInputValue(value);
  // };

  return (
    <>
      <MatchMenu/>
      <Q.preparingImg>
      <Q.PointImg src={emoji}/>
      <Q.Span>준비중입니다 ~</Q.Span>
     </Q.preparingImg>
  </>
  );
};

export default ClubMain;
