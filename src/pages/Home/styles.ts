import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  padding: 32px 20px;
`;

export const Shell = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: clamp(24px, 5vw, 40px);
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(148, 163, 184, 0.16);
  box-shadow: var(--shadow-elevated);
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Eyebrow = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-accent-dark);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const Title = styled.h1`
  margin-top: 12px;
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  line-height: 1.04;
  color: var(--color-text-strong);
`;

export const Subtitle = styled.p`
  max-width: 700px;
  margin-top: 14px;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-muted);
`;

export const HeroGrid = styled.div`
  margin-top: 28px;
  display: grid;
  grid-template-columns: minmax(280px, 360px) minmax(0, 1fr);
  gap: 20px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const ProfileCard = styled.div`
  padding: 24px;
  border-radius: 26px;
  background: linear-gradient(180deg, #0f172a 0%, #13233f 100%);
  color: #e2e8f0;
`;

export const Avatar = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 22px;
  display: grid;
  place-items: center;
  background: rgba(14, 165, 233, 0.16);
  color: #7dd3fc;
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.06em;
`;

export const UserName = styled.h2`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #f8fafc;
`;

export const UserEmail = styled.p`
  margin-top: 8px;
  font-size: 0.98rem;
  color: rgba(226, 232, 240, 0.82);
`;

export const UserRole = styled.p`
  margin-top: 10px;
  font-size: 0.94rem;
  color: #7dd3fc;
  font-weight: 700;
`;

export const StatusChip = styled.span`
  display: inline-flex;
  align-items: center;
  margin-top: 18px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.14);
  color: #6ee7b7;
  font-size: 0.85rem;
  font-weight: 700;
`;

export const SummaryCard = styled.div`
  padding: clamp(24px, 5vw, 32px);
  border-radius: 26px;
  background: #eff6ff;
  border: 1px solid rgba(14, 165, 233, 0.12);
`;

export const SummaryEyebrow = styled.p`
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-accent-dark);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const SummaryTitle = styled.h2`
  margin-top: 14px;
  font-size: 1.8rem;
  line-height: 1.18;
  color: var(--color-text-strong);
`;

export const SummaryText = styled.p`
  margin-top: 14px;
  font-size: 0.98rem;
  line-height: 1.75;
  color: var(--color-text);
`;

export const SectionTitle = styled.h2`
  margin-top: 30px;
  font-size: 1.35rem;
  color: var(--color-text-strong);
`;

export const CardsGrid = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const InsightCard = styled.div`
  padding: 22px;
  border-radius: 22px;
  background: rgba(248, 250, 252, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.16);
`;

export const InsightTitle = styled.h3`
  font-size: 1rem;
  color: var(--color-text-strong);
`;

export const InsightText = styled.p`
  margin-top: 12px;
  font-size: 0.94rem;
  line-height: 1.65;
  color: var(--color-text);
`;
