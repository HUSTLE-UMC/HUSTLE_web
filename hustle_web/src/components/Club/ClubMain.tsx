import * as C from './ClubStyle';
import { useState, useEffect } from 'react';
import SportsMenu from '../SportsMenu/SportsMenu';
import PostMatchButton from '../../components/PostMatchButton/PostMatchButton';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { getClubSelector } from '../../recoil/community';
import ClubList from './ClubList';
import UniversitySearch from '../SignIn/UniversitySearch';

const ClubMain = () => {
  const navigate = useNavigate();
  const postList = useRecoilValue(getClubSelector);
  const [inputValue, setInputValue] = useState('');
  // const clubList = useRecoilValue(getLectureSelector);

  // const handleInputChange = (value: string) => {
  //   setInputValue(value);
  // };

  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]); // 검색 결과 저장
  const [selectedUniversity, setSelectedUniversity] = useState('');

  function PostClick() {
    navigate('/clubOpen');
  }

  const handleInputChange = (value: string) => {
    setSearchQuery(value.toLowerCase());
  };

  const searchPosts = () => {
    const filter = postList.filter((post: any) =>
      post.title.toLowerCase().includes(searchQuery)
    );
    setFilteredPosts(filter);
    console.log('검색어: ', searchQuery);
  };

  const handleEnterKey = () => {
    searchPosts();
  };

  const handleUniversitySelection = (universityId: number) => {
    const university = `${universityId}`;
    setSelectedUniversity(university);
    console.log(selectedUniversity);
  };

  useEffect(() => {
    if (postList.data) {
      setLoading(false);
    }
  }, [postList.data]);

  return (
    <>
      <SportsMenu/>
      <div>
          <C.Search
            size='small'
            type='text'
            value={searchQuery}
            onChange={handleInputChange}
            onEnter={handleEnterKey}
            placeholder='궁금한 정보를 입력하세요'
          />
        </div>
        <div>
          <UniversitySearch onSelecteUniversity={handleUniversitySelection} />
        </div>
      <C.Container>
        <C.Div>동아리 목록</C.Div>
        <div>
      <PostMatchButton
        type='small'
        label='동아리 개설'
        onClick={PostClick}
      />
      </div>
      <div>
        <ClubList posts={filteredPosts.length > 0 ? filteredPosts : postList.data} loading={loading}/>
      </div>
      </C.Container>
  </>
  );
};

export default ClubMain;
