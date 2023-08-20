import * as S from './Styles';
import GroupSelector from '../../GroupSelector/GroupSelector';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  PreCompetitionState,
  competitionSelectState,
  competitionTypes
} from '../../../recoil/CompetitionPage/CompetitionButton';

interface Props {
  disable?: boolean;
}

export const CompetitionButton = ({ disable }: Props) => {
  const [menus, setMenus] = useRecoilState(PreCompetitionState);
  const setIsSelected = useSetRecoilState(competitionSelectState);
  const handleClick = (menuId: number) => {
    setMenus(
      menus.map((m: competitionTypes) => {
        return m.menuId === menuId
          ? { ...m, selected: true }
          : { ...m, selected: false };
      })
    );
    setIsSelected(true);
  };
  return (
    <S.CategoryLayout>
      {menus.map((m, index) => (
        <GroupSelector
          key={m.menuId}
          type={m.type}
          label={m.label}
          selected={m.selected}
          onClick={
            disable
              ? () => {
                  alert('종목 변경을 원하시면 목록 페이지로 돌아가 주세요.');
                }
              : () => handleClick(index)
          }
        ></GroupSelector>
      ))}
    </S.CategoryLayout>
  );
};

export default CompetitionButton;
