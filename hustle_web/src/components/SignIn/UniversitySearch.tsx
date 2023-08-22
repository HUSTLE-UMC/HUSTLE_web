import * as S from './Styles';
import axios from 'axios';
import { useState } from 'react';
import { UniversityProps } from '../../constants/interfaces';

interface UniversitySearchProps {
  onSelectUniversity: (universityId: string) => void;
}

const UniversitySearch = ({ onSelectUniversity }: UniversitySearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [universityList, setUniversityList] = useState<
    UniversityProps['universities'][0][]
  >([]);
  const [selectedUniversityId, setSelectedUniversityId] = useState<string>('');

  const handleSearchUniversity = async () => {
    try {
      const response = await axios.get(
        `https://api.sport-hustle.com/api/university?keyword=${encodeURIComponent(
          searchQuery
        )}`
      );

      if (Array.isArray(response.data.universities)) {
        setUniversityList(response.data.universities);
      }
    } catch (error) {
      console.error('대학교 검색 오류:', error);
    }
  };

  const handleUniversitySelection = (name: string, id: string) => {
    setSearchQuery(name);
    setSelectedUniversityId(id); // 선택된 대학교의 id를 설정
    onSelectUniversity(id); // 선택한 대학교의 id를 부모 컴포넌트로 전달
  };

  return (
    <>
      <S.InputLabel>소속 대학교</S.InputLabel>
      <S.InputLarge
        type='university'
        placeholder='재학 중인 대학교를 입력하세요'
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
        }}
      />
      <S.SubmitButton type='button' onClick={handleSearchUniversity}>
        검색
      </S.SubmitButton>

      <S.UniversityList>
        {universityList.map((university) => (
          <div key={university.id}>
            <S.NameText>{university.name}</S.NameText>
            <div>
              <S.AddressText>{university.address}</S.AddressText>
            </div>
            <S.RightContainer>
              <button
                type='button'
                onClick={() => {
                  handleUniversitySelection(university.name, university.id);
                }}
              >
                선택
              </button>
            </S.RightContainer>
          </div>
        ))}
      </S.UniversityList>
    </>
  );
};

export default UniversitySearch;
