import * as S from './Styles';
import GroupSelector from '../../GroupSelector/GroupSelector';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  MainCompetitionState,
  competitionSelectState,
  competitionTypes
} from '../../../recoil/CompetitionPage/CompetitionButton';

export const MainCompetitionButton = () => {
  const [menu, setMenu] = useRecoilState(MainCompetitionState);
  const setIsSelected = useSetRecoilState(competitionSelectState);
  const handleClick = (menuId: number) => {
    setMenu(
      menu.map((m) => {
        return m.menuId === menuId
          ? { ...m, selected: true }
          : { ...m, selected: false };
      })
    );
    setIsSelected(true);
  };
  return (
    <S.CategoryLayout>
      {menu.map((m: competitionTypes, index: number) => (
        <GroupSelector
          key={m.menuId}
          type={m.type}
          label={m.label}
          selected={m.selected}
          onClick={() => handleClick(index)}
        ></GroupSelector>
      ))}
    </S.CategoryLayout>
  );
};

export default MainCompetitionButton;
