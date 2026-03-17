import {
  ButtonContainer,
  ButtonLabel,
  LoadingIndicator,
} from "./styles";
import { IButtonProps } from "./types";

const Button = ({
  title,
  type = "button",
  variant = "primary",
  fullWidth = true,
  isLoading = false,
  loadingLabel,
  disabled,
  ...rest
}: IButtonProps) => {
  return (
    <ButtonContainer
      type={type}
      $variant={variant}
      $fullWidth={fullWidth}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...rest}
    >
      {isLoading ? <LoadingIndicator aria-hidden="true" /> : null}
      <ButtonLabel>{isLoading ? loadingLabel ?? title : title}</ButtonLabel>
    </ButtonContainer>
  );
};

export default Button;
