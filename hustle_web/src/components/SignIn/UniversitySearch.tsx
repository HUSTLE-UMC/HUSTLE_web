import * as S from './Styles';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { UniversityProps } from '../../constants/interfaces';
import Select from 'react-select';

const UniversitySearch = ({
  onSelecteUniversity
}: {
  onSelecteUniversity: (UniversityId: number) => void;
}) => {
  const [universityList, setUniversityList] = useState<UniversityProps[]>([]);
  const [searchQuery,] = useState(''); // 검색어 상태 추가
  const [selectedUniversity, setSelectedUniversity] = useState<UniversityProps | null>(null);

  const handleSearchUniversity = async () => {
    try {
      const response = await axios.get(
        `https://api.sport-hustle.com/api/university?keyword=${searchQuery}`
      );
      setUniversityList(response.data.data);
    } catch (error) {
      console.error('대학교 검색 오류:', error);
      setUniversityList([]);
    }
  };

  const options = universityList
  .filter((university) => typeof university.id === 'number')
  .map((university) => ({
    value: university.id,
    label: university.name,
    address : university.address
  }));

  const handleUniversitySelection = (selectedOption: any) => {
    setSelectedUniversity(selectedOption);
  };

  useEffect(() => {
    handleSearchUniversity();
  },[searchQuery]);

  useEffect(() => {
    if (selectedUniversity !== null) {
      onSelecteUniversity(selectedUniversity.id);
    }
  }, [selectedUniversity, onSelecteUniversity]);


  return (
    <>
      <S.InputLabel>소속 대학교</S.InputLabel>
      {universityList.length > 0 && (
        <Select
          options={options}
          onChange={handleUniversitySelection}
          placeholder='대학교를 선택하세요'
        />
      )}
    </>
  );
};

export default UniversitySearch;
