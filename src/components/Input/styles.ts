import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  color: #3a3a3a;
`;

export const InputField = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  padding: 0 14px;
  outline: none;
  font-size: 15px;

  &:focus {
    border-color: #81259d;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 6px;
  font-size: 13px;
  color: #d1242f;
`;