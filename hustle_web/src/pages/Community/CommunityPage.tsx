import SportsMenu from '../../components/SportsMenu/SportsMenu';
import MainCommunity from '../../components/Community/Main/MainCommunity';

const CommunityPage = () => {
  // const [inputValue, setInputValue] = useState('');
  // // const communityList = useRecoilValue(getCommunitySelector);

  // const handleInputChange = (value: string) => {
  //   setInputValue(value);
  // };

  return (
    <>
      {/* <C.Layout>
        <SportsMenu/>
        <C.Container>
          <Q.FirstDiv>
            <Q.Border>[ 질문 게시판 ]</Q.Border>
            <Q.ButtonWrap>
              <Q.WriteButton to='/community/question'>더보기</Q.WriteButton>
            </Q.ButtonWrap>
          </Q.FirstDiv>
          <Q.preparingImg>
            <Q.PointImg src={emoji}/>
            <Q.Span>준비중입니다 ~</Q.Span>
          </Q.preparingImg> */}
          {/* <div>
          <QuestionList posts={filteredPosts.length > 0 ? filteredPosts : postList.data} loading={loading}/>
        </div> */}
        {/* </C.Container>
        <C.Container>
          <Q.FirstDiv>
            <Q.Border>[ 동아리 게시판 ]</Q.Border>
            <Q.ButtonWrap>
              <Q.WriteButton to='/community/club'>더보기</Q.WriteButton>
            </Q.ButtonWrap>
          </Q.FirstDiv>
          <Q.preparingImg>
            <Q.PointImg src={emoji}/>
            <Q.Span>준비중입니다 ~</Q.Span>
          </Q.preparingImg>
        </C.Container>
      </C.Layout> */}
      <SportsMenu/>
      <MainCommunity/>
    </>
  );
};

export default CommunityPage;
