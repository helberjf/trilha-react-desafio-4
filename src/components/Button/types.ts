export type ButtonVariant = "primary" | "secondary";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingLabel?: string;
}
