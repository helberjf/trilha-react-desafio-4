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
  max-width: 600px;
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #81259d;
  margin-bottom: 12px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #444444;
  line-height: 1.6;
  margin-bottom: 12px;
`;

export const Highlight = styled.span`
  font-weight: 700;
  color: #81259d;
`;