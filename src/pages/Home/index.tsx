import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";
import { APP_ROUTES } from "../../routes/AppRoutes";
import {
  Avatar,
  CardsGrid,
  Container,
  Eyebrow,
  Header,
  HeroGrid,
  InsightCard,
  InsightText,
  InsightTitle,
  ProfileCard,
  SectionTitle,
  Shell,
  StatusChip,
  Subtitle,
  SummaryCard,
  SummaryEyebrow,
  SummaryText,
  SummaryTitle,
  Title,
  UserEmail,
  UserName,
  UserRole,
} from "./styles";

const highlights = [
  {
    title: "Sessao persistida",
    description:
      "A sessao continua simples, mas agora e recuperada por uma camada dedicada, em vez de ficar acoplada ao contexto.",
  },
  {
    title: "Rota privada previsivel",
    description:
      "A protecao da Home espera a hidratacao inicial da autenticacao antes de decidir entre renderizar ou redirecionar.",
  },
  {
    title: "Fluxo principal coberto",
    description:
      "Renderizacao, validacao, login valido, login invalido e protecao de rota passam a ter testes automatizados.",
  },
];

function getInitials(name?: string) {
  if (!name) {
    return "US";
  }

  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((value) => value[0]?.toUpperCase() ?? "")
    .join("");
}

function getFirstName(name?: string) {
  return name?.split(" ")[0] ?? "usuario";
}

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(APP_ROUTES.login, { replace: true });
  };

  return (
    <Container>
      <Shell>
        <Header>
          <div>
            <Eyebrow>Painel autenticado</Eyebrow>
            <Title>Bem-vindo, {getFirstName(user?.name)}.</Title>
            <Subtitle>
              Esta area substitui a Home didatica por uma apresentacao mais
              solida para portfolio, preservando o fluxo de login e logout da
              aplicacao.
            </Subtitle>
          </div>

          <Button
            title="Encerrar sessao"
            variant="secondary"
            fullWidth={false}
            onClick={handleLogout}
          />
        </Header>

        <HeroGrid>
          <ProfileCard>
            <Avatar>{getInitials(user?.name)}</Avatar>
            <UserName>{user?.name ?? "Usuario autenticado"}</UserName>
            <UserEmail>{user?.email}</UserEmail>
            <UserRole>{user?.role}</UserRole>
            <StatusChip>Sessao ativa</StatusChip>
          </ProfileCard>

          <SummaryCard>
            <SummaryEyebrow>Resumo tecnico</SummaryEyebrow>
            <SummaryTitle>
              Autenticacao mockada, organizada como projeto de pequeno porte.
            </SummaryTitle>
            <SummaryText>
              O valor desta base nao esta em simular um backend completo, e sim
              em mostrar criterio: separacao de camadas, tipagem consistente,
              protecao de rota confiavel e uma interface com acabamento melhor.
            </SummaryText>
            <SummaryText>
              Em vez de listar tecnologias como exercicio, esta tela comunica
              claramente o que foi melhorado e por que isso aumenta a qualidade
              do projeto.
            </SummaryText>
          </SummaryCard>
        </HeroGrid>

        <SectionTitle>Pontos fortes desta entrega</SectionTitle>

        <CardsGrid>
          {highlights.map((item) => (
            <InsightCard key={item.title}>
              <InsightTitle>{item.title}</InsightTitle>
              <InsightText>{item.description}</InsightText>
            </InsightCard>
          ))}
        </CardsGrid>
      </Shell>
    </Container>
  );
};

export default Home;
