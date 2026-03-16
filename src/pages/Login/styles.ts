import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: linear-gradient(135deg, #6d1b7b 0%, #81259d 55%, #a647bd 100%);
`;

export const Card = styled.div`
  width: 100%;
  max-width: 460px;
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #81259d;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 15px;
  color: #555555;
  margin-bottom: 24px;
  line-height: 1.5;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Spacing = styled.div`
  margin-bottom: 16px;
`;

export const AuthError = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  color: #d1242f;
  font-weight: 700;
`;

export const DemoBox = styled.div`
  margin-top: 20px;
  padding: 14px;
  background: #f6ebfa;
  border: 1px solid #ead3f1;
  border-radius: 10px;

  p {
    font-size: 14px;
    color: #4b2558;
    line-height: 1.5;
  }
`;