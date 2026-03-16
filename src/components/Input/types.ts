import { Control, FieldValues, Path } from "react-hook-form";

export interface IInputProps<TFieldValues extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  errorMessage?: string;
}