import * as S from './Styles';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { UniversityProps } from '../../constants/interfaces';
import Select from 'react-select';


// interface UniversitySearchProps {
//   onSelectUniversity: (universityName: string) => void;
// }

const UniversitySearch = ({ onSelecteUniversity }: {onSelecteUniversity : (UniversityId : number) => void}) => {
  const [universityList, setUniversityList] = useState<UniversityProps[]>([]);
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태 추가
  const [selectedId, setSelectedId] = useState(0);

  const handleSearchUniversity = async () => {
    // setUniversityList(dummyUniversityData);
    try {
      const response = await axios.get(`https://api.sport-hustle.com/api/university?keyword=${searchQuery}`);
      setUniversityList(response.data.universities);
    } catch (error) {
      console.error('대학교 검색 오류:', error);
      setUniversityList([]);
    }
  };

  const options = universityList.length > 0
  ? universityList.map((university) => ({
      value: university.id,
      label: university.name,
    }))
  : [];

  const handleUniversitySelection = (selectedOption: any) => {
    if (selectedOption) {
      setSearchQuery(selectedOption.label); // 선택된 대학교 이름을 검색창에 표시
      onSelecteUniversity(selectedOption.value); // 선택된 대학교 ID를 부모 컴포넌트로 전달
    }
  };

  useEffect(() => {
    if (searchQuery) {
      handleSearchUniversity();
    }
  }, [searchQuery]);

  return (
    <>
      <S.InputLabel>소속 대학교</S.InputLabel>
      {universityList.length > 0 && (
        <S.SelectBox>
        <Select
          options={options}
          onChange={handleUniversitySelection}
          placeholder="대학교를 선택하세요"
        />
        </S.SelectBox>
      )}
    </>
  );
};

export default UniversitySearch;
