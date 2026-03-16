import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, ...rest }: IButtonProps) => {
  return <ButtonContainer {...rest}>{title}</ButtonContainer>;
};

export default Button;