import { Controller, FieldValues } from "react-hook-form";
import { ErrorMessage, InputField, Label, Wrapper } from "./styles";
import { IInputProps } from "./types";

function Input<TFieldValues extends FieldValues>({
  label,
  name,
  control,
  errorMessage,
  ...rest
}: IInputProps<TFieldValues>) {
  return (
    <Wrapper>
      <Label htmlFor={String(name)}>{label}</Label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <InputField id={String(name)} {...field} {...rest} />
        )}
      />

      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </Wrapper>
  );
}

export default Input;