import React, { useEffect, useState } from "react";
import DropDown from "../../DropDown/DropDown";
import * as M from "./Styles";
import PostFormLeft from "./PostFormLeft";
import PostFormRight from "./PostFormRight";
import { useRecoilValue } from "recoil";
import { menuState } from "../../../recoil/friendlyMatchPage/states";
import { useLocation } from "react-router-dom";
import { dropdownMenuSelector } from "../../../recoil/friendlyMatchPage/selectors";
import SportsMenu from "../../SportsMenu/SportsMenu";

export const PostMatch = () => {
  const location = useLocation();
  const isMatch = location.state?.isMatch;
  const [Index, setIndex] = useState({ isMatch } ? 0 : 1);
  const menus = useRecoilValue(menuState);
  const menuArr: string[] = [];
  menus.map((v) => {
    menuArr.push(v.label);
  });
  const menuID = useRecoilValue(dropdownMenuSelector);
  useEffect(() => {
    setIndex(menuID);
  }, [menuID]);
  return (
    <>
      <SportsMenu />
      <M.Layout>
        <M.DropDownLayout>
          <DropDown
            Items={menuArr}
            {...(isMatch ? { index: 0 } : { index: 1 })}
          />
        </M.DropDownLayout>
        <PostFormLeft />
        <PostFormRight id={Index} />
      </M.Layout>
    </>
  );
};

export default PostMatch;
