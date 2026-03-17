import styled, { css, keyframes } from "styled-components";
import { ButtonVariant } from "./types";

interface ButtonContainerProps {
  $variant: ButtonVariant;
  $fullWidth: boolean;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const secondaryStyles = css`
  background: rgba(15, 23, 42, 0.06);
  color: var(--color-text-strong);
  border-color: rgba(15, 23, 42, 0.12);

  &:hover:not(:disabled) {
    background: rgba(15, 23, 42, 0.1);
  }
`;

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  min-width: 148px;
  min-height: 48px;
  border-radius: 14px;
  border: 1px solid transparent;
  padding: 0 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  color: #f8fafc;
  font-size: 0.98rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease,
    background 0.2s ease;
  box-shadow: 0 16px 32px rgba(2, 132, 199, 0.22);

  ${({ $variant }) => $variant === "secondary" && secondaryStyles}

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 18px 34px rgba(2, 132, 199, 0.26);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(14, 165, 233, 0.18),
      0 16px 32px rgba(2, 132, 199, 0.22);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const ButtonLabel = styled.span`
  white-space: nowrap;
`;

export const LoadingIndicator = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid currentColor;
  border-right-color: transparent;
  animation: ${spin} 0.8s linear infinite;
`;
