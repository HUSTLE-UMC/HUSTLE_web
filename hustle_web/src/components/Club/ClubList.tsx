import React, { useState } from 'react';
import { Arrow } from '../../stories/Icons/svg';
import * as CL from './ClubListStyle';
import { useRecoilState, useRecoilValue } from 'recoil';
import { clubState } from '../../recoil/community';


const ClubList = ({posts, loading }: any) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const arrowButton: boolean[] = useRecoilValue(clubState);
  const setArrowButton = useRecoilState(clubState)[1];

  const handleQuestionClick = (id: any) => {
    setSelectedQuestion(id);
  };

  const handleClick = (index: number) => {
    const newIcons = [...arrowButton];
    newIcons[index] = !newIcons[index];
    setArrowButton(newIcons);
  };

  return (
    <CL.listLayout>
    {loading && <div>loading...</div>}
    <CL.listContainer>
      {posts.map((post: any, index: number) => (
        <div key={post.id}>
          <CL.Box onClick={() => handleQuestionClick(post.id)}>
            <CL.List>{post.title}</CL.List>
            <CL.IconWrap onClick={() => handleClick(index)}>
              {arrowButton[index] ? (
                <Arrow transform='rotate(180)' />
              ) : (
                <Arrow />
              )}
            </CL.IconWrap>
          </CL.Box>
          <div>
            {selectedQuestion === post.id && arrowButton[index] && (
              <CL.detail>{post.detail}</CL.detail>
            )}
          </div>
        </div>
      ))}
    </CL.listContainer>
  </CL.listLayout>
);
};


export default ClubList;