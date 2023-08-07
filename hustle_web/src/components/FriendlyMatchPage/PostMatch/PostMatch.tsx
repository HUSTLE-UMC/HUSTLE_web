import DropDown from '../../DropDown/DropDown';
import * as M from './Styles';
import SportsMenu from '../../SportsMenu/SportsMenu';

import PostForm from './PostForm';

export const PostMatch = () => {
  return (
    <>
      <SportsMenu />
      <M.PostLayout>
        <M.SideContainer>
          <DropDown index={0} />
        </M.SideContainer>
        <PostForm />
        <M.SideContainer />
      </M.PostLayout>
    </>
  );
};

export default PostMatch;
