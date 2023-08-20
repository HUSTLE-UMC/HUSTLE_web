import * as S from './Styles';
import GroupSelector from '../../GroupSelector/GroupSelector';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  competitionMenuState,
  competitionSelectState,
  competitionTypes
} from '../../../recoil/CompetitionPage/CompetitionButton';

interface Props {
  disable?: boolean;
}

export const CompetitionButton = ({ disable }: Props) => {
  const [menus, setMenus] = useRecoilState(competitionMenuState);
  const setIsSelected = useSetRecoilState(competitionSelectState);
  const handleClick = (id: number) => {
    setMenus(
      menus.map((m: competitionTypes) => {
        return m.id === id
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
          key={index}
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
