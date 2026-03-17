import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
`;

export const Shell = styled.section`
  width: 100%;
  max-width: 1120px;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(340px, 440px);
  gap: 24px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const Showcase = styled.div`
  padding: clamp(28px, 5vw, 48px);
  border-radius: 32px;
  background: rgba(7, 17, 31, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.14);
  box-shadow: var(--shadow-elevated);
  color: #e2e8f0;
  backdrop-filter: blur(16px);
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(14, 165, 233, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.18);
  color: #7dd3fc;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const Title = styled.h1`
  margin-top: 24px;
  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 1.02;
  color: #f8fafc;
`;

export const Subtitle = styled.p`
  max-width: 580px;
  margin-top: 18px;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(226, 232, 240, 0.82);
`;

export const FeatureGrid = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  padding: 18px;
  border-radius: 22px;
  background: rgba(15, 23, 42, 0.54);
  border: 1px solid rgba(148, 163, 184, 0.12);
`;

export const FeatureTitle = styled.h2`
  font-size: 1rem;
  color: #f8fafc;
`;

export const FeatureText = styled.p`
  margin-top: 10px;
  font-size: 0.94rem;
  line-height: 1.6;
  color: rgba(226, 232, 240, 0.72);
`;

export const Panel = styled.div`
  padding: 28px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(148, 163, 184, 0.14);
  box-shadow: var(--shadow-elevated);
`;

export const PanelHeader = styled.header`
  margin-bottom: 24px;
`;

export const Eyebrow = styled.p`
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-accent-dark);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const FormTitle = styled.h2`
  margin-top: 14px;
  font-size: 1.95rem;
  line-height: 1.08;
  color: var(--color-text-strong);
`;

export const FormSubtitle = styled.p`
  margin-top: 12px;
  font-size: 0.98rem;
  line-height: 1.65;
  color: var(--color-text-muted);
`;

export const Form = styled.form`
  width: 100%;
`;

export const FieldGroup = styled.div`
  margin-bottom: 18px;
`;

export const AuthError = styled.div`
  margin-bottom: 18px;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid rgba(220, 38, 38, 0.18);
  background: rgba(254, 226, 226, 0.72);
  color: #991b1b;
  font-size: 0.92rem;
  font-weight: 700;
  line-height: 1.5;
`;

export const CredentialsBox = styled.aside`
  margin-top: 22px;
  padding: 18px;
  border-radius: 20px;
  background: #eff6ff;
  border: 1px solid rgba(14, 165, 233, 0.14);
`;

export const CredentialsTitle = styled.h3`
  font-size: 0.95rem;
  color: var(--color-text-strong);
`;

export const CredentialRow = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 0.92rem;
  color: var(--color-text);

  strong {
    color: var(--color-text-strong);
  }
`;

export const FooterNote = styled.p`
  margin-top: 18px;
  font-size: 0.86rem;
  line-height: 1.55;
  color: var(--color-text-muted);
`;
