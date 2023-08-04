import * as S from './Styles';
import { ButtonProps } from './ButtonProps';

const SportsButton = ({ label, selected, onClick }: ButtonProps) => {
  return (
    <>
      {selected ? (
        <S.SelectedBtn onClick={onClick}>{label}</S.SelectedBtn>
      ) : (
        <S.StyledBtn onClick={onClick}>{label}</S.StyledBtn>
      )}
    </>
  );
};

export default SportsButton;
