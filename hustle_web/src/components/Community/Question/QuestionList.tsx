import React, { useState } from 'react';
import { Arrow } from '../../../stories/Icons/svg';
import * as QL from './QuestionStyle';
import { useRecoilState, useRecoilValue } from 'recoil';
import { questionState } from '../../../recoil/community';
import emoji from '../../../assets/images/competition_logoimg.png'
import * as Q from '../Question/QuestionStyle';


const QuestionList = () => {
  // {posts, loading }: any
  // const [selectedQuestion, setSelectedQuestion] = useState(null);
  // const arrowButton: boolean[] = useRecoilValue(questionState);
  // const setArrowButton = useRecoilState(questionState)[1];

  // const handleQuestionClick = (id: any) => {
  //   setSelectedQuestion(id);
  // };

  // const handleClick = (index: number) => {
  //   const newIcons = [...arrowButton];
  //   newIcons[index] = !newIcons[index];
  //   setArrowButton(newIcons);
  // };

  return (
    <QL.listLayout>
    {/* {loading && <div>loading...</div>}
    <QL.listContainer>
      {posts.map((post: any, index: number) => (
        <div key={post.id}>
          <QL.Box onClick={() => handleQuestionClick(post.id)}>
            <QL.List>{post.title}</QL.List>
            <QL.IconWrap onClick={() => handleClick(index)}>
              {arrowButton[index] ? (
                <Arrow transform='rotate(180)' />
              ) : (
                <Arrow />
              )}
            </QL.IconWrap>
          </QL.Box>
          <div>
            {selectedQuestion === post.id && arrowButton[index] && (
              <QL.detail>{post.detail}</QL.detail>
            )}
          </div>
        </div>
      ))}
    </QL.listContainer> */}
    <Q.preparingImg>
      <Q.PointImg src={emoji}/>
      <Q.Span>준비중입니다 ~</Q.Span>
    </Q.preparingImg>
  </QL.listLayout>
);
};


export default QuestionList;
