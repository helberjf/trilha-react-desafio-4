import styled from "styled-components";

interface InputFieldProps {
  $hasError: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 0.93rem;
  font-weight: 700;
  color: var(--color-text-strong);
`;

export const InputField = styled.input<InputFieldProps>`
  width: 100%;
  min-height: 50px;
  border: 1px solid
    ${({ $hasError }) =>
      $hasError ? "rgba(220, 38, 38, 0.45)" : "rgba(148, 163, 184, 0.32)"};
  border-radius: 14px;
  padding: 0 16px;
  outline: none;
  font-size: 0.98rem;
  color: var(--color-text-strong);
  background: rgba(248, 250, 252, 0.88);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &::placeholder {
    color: var(--color-text-muted);
  }

  &:hover {
    border-color: rgba(14, 165, 233, 0.28);
  }

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? "#dc2626" : "#0ea5e9")};
    box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.12);
    background: #ffffff;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 8px;
  font-size: 0.85rem;
  color: #dc2626;
  font-weight: 600;
`;
