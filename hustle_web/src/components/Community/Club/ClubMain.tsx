import * as C from './ClubStyle';
import { useState } from 'react';

const ClubMain = () => {
  const [inputValue, setInputValue] = useState('');
  // const clubList = useRecoilValue(getLectureSelector);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <>
      <div>
        <div>
          <C.Search
            size='small'
            type='text'
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default ClubMain;
