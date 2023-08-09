import * as S from './Styles';
import SportsButton from '../SportsButton/SportsButton';
import { useRecoilState } from 'recoil';
import { buttonState, buttonTypes } from '../../recoil/SportsButton';

export const SportsMenu = () => {
  const [buttons, setButtons] = useRecoilState(buttonState);
  const handleSelect = (id: number) => {
    setButtons(
      buttons.map((button: buttonTypes) => {
        return button.id === id
          ? { ...button, selected: true }
          : { ...button, selected: false };
      })
    );
  };
  return (
    <S.CategoryWrap>
      {buttons.map((button, index) => (
        <SportsButton
          key={index}
          label={button.label}
          selected={button.selected}
          onClick={() => handleSelect(index)}
        ></SportsButton>
      ))}
    </S.CategoryWrap>
  );
};

export default SportsMenu;
