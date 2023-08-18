// GenderButton.js
import * as S from './Styles';
export type GenderButtonProps = {
  isActive: boolean;
  gender: string;
  selectedGender: string;
  handleGenderSelection: (gender: string) => void;
};

const GenderButton = ({
  gender,
  selectedGender,
  handleGenderSelection
}: GenderButtonProps) => {
  return <></>;
};

export default GenderButton;
