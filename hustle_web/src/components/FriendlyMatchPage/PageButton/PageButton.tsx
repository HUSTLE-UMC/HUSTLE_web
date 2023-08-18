import { useRecoilState, useRecoilValue } from 'recoil';
import * as S from './Styles';
import { pageNumberState } from '../../../recoil/friendlyMatchPage/states';
import { pageNumberTypes } from '../../../recoil/friendlyMatchPage/types';
import { pageNumberSelector } from '../../../recoil/friendlyMatchPage/selectors';

const PageButton = () => {
  const [page, setPage] = useRecoilState(pageNumberState);
  const selectedPage = useRecoilValue(pageNumberSelector);
  const handleClick = (id: number) => {
    setPage(
      page.map((v: pageNumberTypes) => {
        return v.id === id
          ? { ...v, isSelected: true }
          : { ...v, isSelected: false };
      })
    );
  };
  const handlePrevBtn = () => {
    if (selectedPage > 1) {
      setPage(
        page.map((v: pageNumberTypes) => {
          return v.id === selectedPage - 1
            ? { ...v, isSelected: true }
            : { ...v, isSelected: false };
        })
      );
    }
    return;
  };
  const handleNextBtn = () => {
    if (selectedPage < 10) {
      setPage(
        page.map((v: pageNumberTypes) => {
          return v.id === selectedPage + 1
            ? { ...v, isSelected: true }
            : { ...v, isSelected: false };
        })
      );
    }
    return;
  };
  return (
    <S.ButtonLayout>
      <S.ButtonComponent>
        <S.NavBtn onClick={() => handlePrevBtn()}>이전</S.NavBtn>
        {page.map((v, i) =>
          v.isSelected ? (
            <S.SelectedBtn key={i} onClick={() => handleClick(v.id)}>
              {v.id}
            </S.SelectedBtn>
          ) : (
            <S.NumberBtn key={i} onClick={() => handleClick(v.id)}>
              {v.id}
            </S.NumberBtn>
          )
        )}
        <S.NavBtn onClick={() => handleNextBtn()}>다음</S.NavBtn>
      </S.ButtonComponent>
    </S.ButtonLayout>
  );
};

export default PageButton;
