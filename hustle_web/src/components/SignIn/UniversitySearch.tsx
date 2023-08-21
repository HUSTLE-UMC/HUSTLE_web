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

  const options = universityList.map((university) => ({
    value: university.id,
    label: university.name,
  }));

  // const handleUniversitySelection = (universityId: number) => {
  //   const selectedUniversity = universityList.find(university => university.id === universityId);
    
  //   if(selectedUniversity){
  //     setSearchQuery(selectedUniversity.name); // 선택된 대학교 이름을 검색창에 표시
  //     onSelecteUniversity(selectedUniversity.id); // 선택된 대학교 이름을 부모 컴포넌트로 전달
  //   }
  // };

  const handleUniversitySelection = (selectedOption: any) => {
    if (selectedOption) {
      setSearchQuery(selectedOption.label); // 선택된 대학교 이름을 검색창에 표시
      onSelecteUniversity(selectedOption.value); // 선택된 대학교 ID를 부모 컴포넌트로 전달
    }
  };

  useEffect(() => {
    handleSearchUniversity()
  },);

  return (
    <>
      <S.InputLabel>소속 대학교</S.InputLabel>
      {/* <S.InputLarge
        type='university'
        placeholder='재학 중인 대학교를 입력하세요'
        value={searchQuery} // 입력창에 표시될 값은 searchQuery 상태
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
        }}
      /> */}
      {universityList.length > 0 && (
        <Select
          options={options}
          onChange={handleUniversitySelection}
          placeholder="대학교를 선택하세요"
        />
      )}
      {/* <S.SubmitButton
        type='button'
        onClick={() => {
          handleSearchUniversity();
        }} // 검색 버튼 클릭 시 대학교 목록 검색
      >
        검색
      </S.SubmitButton> */}

      {/* {universityList.length > 0 && (
        <S.UniversityList>
          {universityList.map((university, id) => (
            <div key={id}>
              <S.NameText>{university.name}</S.NameText>
              <div>
                <S.AddressText>{university.address}</S.AddressText>
              </div>
              <S.RightContainer>
                <button
                  type='button'
                  onClick={() => {
                    handleUniversitySelection(university.id);
                  }}
                >
                  선택
                </button>
              </S.RightContainer>
            </div>
          ))}
        </S.UniversityList>
      )} */}
    </>
  );
};

export default UniversitySearch;
