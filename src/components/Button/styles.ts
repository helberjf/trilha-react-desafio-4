import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 10px;
  background: #81259d;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;