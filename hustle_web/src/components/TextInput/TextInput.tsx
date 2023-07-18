import React from "react";
import * as T from "./Styles";

interface Props {
  size: string;
  holder: string;
}

export const TextInput = ({ size, holder }: Props) => {
  switch (size) {
    case "small":
      return <>{<T.InputSmall placeholder={holder} />}</>;
    case "medium":
      return <>{<T.InputMedium placeholder={holder} />}</>;
    case "large":
      return <>{<T.InputLarge placeholder={holder} />}</>;
    default:
      return <>{}</>;
  }
};

export default TextInput;
