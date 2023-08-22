import * as S from './Styles';
import axios from 'axios';
import { useState } from 'react';
import { UniversityProps } from '../../constants/interfaces';
import { dummyUniversityData } from './DummyUniversityData';

interface UniversitySearchProps {
  onSelectUniversity: (universityName: string) => void;
}

const UniversitySearch = ({ onSelectUniversity }: UniversitySearchProps) => {
  const [universityList, setUniversityList] = useState<UniversityProps[]>([]);
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태 추가

  const handleSearchUniversity = async () => {
    if (searchQuery.trim() === '') {
      onSelectUniversity(''); // 검색 결과 초기화
      return;
    } else {
      const filteredUniversities = dummyUniversityData.filter((university) =>
        university.universityName.includes(searchQuery)
      );
      setUniversityList(filteredUniversities);
    }
    // setUniversityList(dummyUniversityData);
    try {
      const response = await axios.get('URL_TO_GET_UNIVERSITY_DATA', {
        params: { query: searchQuery }
      });
      onSelectUniversity(searchQuery);
      setUniversityList(response.data);
    } catch (error) {
      console.error('대학교 검색 오류:', error);
    }
  };

  const handleUniversitySelection = (universityName: string) => {
    setSearchQuery(universityName); // 선택된 대학 이름을 검색어로 설정
    onSelectUniversity(universityName); // 선택된 대학 이름을 부모 컴포넌트로 전달
  };

  return (
    <>
      <S.InputLabel>소속 대학교</S.InputLabel>
      <S.InputLarge
        type='university'
        placeholder='재학 중인 대학교를 입력하세요'
        value={searchQuery} // 입력창에 표시될 값은 searchQuery 상태
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
        }}
      />
      <S.SubmitButton
        type='button'
        onClick={
          handleSearchUniversity
          // onSelectUniversity(searchQuery);
        } // 검색 버튼 클릭 시 대학교 목록 검색
      >
        검색
      </S.SubmitButton>

      {universityList.length > 0 && (
        <S.UniversityList>
          {' '}
          {universityList.map((university, id) => (
            <div key={id}>
              <S.NameText>{university.universityName}</S.NameText>
              <div>
                <S.AddressText>{university.address}</S.AddressText>
              </div>
              <S.RightContainer>
                <button
                  type='button'
                  onClick={() => {
                    handleUniversitySelection(university.universityName);
                  }}
                >
                  선택
                </button>
              </S.RightContainer>
            </div>
          ))}
        </S.UniversityList>
      )}
    </>
  );
};

export default UniversitySearch;
