import * as S from './Styles';
import { ButtonProps } from './ButtonProps';

const SportsButton = ({ label, selected, onClick }: ButtonProps) => {
  return (
    <S.ButtonLayout>
      <S.Button {...(selected && { color: '#3F37C9' })} onClick={onClick}>
        {label}
      </S.Button>
    </S.ButtonLayout>
  );
};

export default SportsButton;
