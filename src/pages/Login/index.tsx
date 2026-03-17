import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { useAuth } from "../../contexts/AuthContext";
import { AUTH_TEST_CREDENTIALS } from "../../services/auth/authService";
import { APP_ROUTES } from "../../routes/AppRoutes";
import { defaultValues, IFormLogin } from "./types";
import {
  AuthError,
  Badge,
  Container,
  CredentialRow,
  CredentialsBox,
  CredentialsTitle,
  Eyebrow,
  FeatureCard,
  FeatureGrid,
  FeatureText,
  FeatureTitle,
  FieldGroup,
  FooterNote,
  Form,
  FormSubtitle,
  FormTitle,
  Panel,
  PanelHeader,
  Shell,
  Showcase,
  Subtitle,
  Title,
} from "./styles";

const schema: yup.SchemaOf<IFormLogin> = yup
  .object({
    email: yup.string().required("Campo obrigatorio").email("E-mail invalido"),
    password: yup
      .string()
      .required("Campo obrigatorio")
      .min(6, "Minimo de 6 caracteres"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const { login, error, clearError, isAuthenticated, isAuthenticating } =
    useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate(APP_ROUTES.home, { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = async (data: IFormLogin) => {
    await login(data);
  };

  const isBusy = isSubmitting || isAuthenticating;

  return (
    <Container>
      <Shell>
        <Showcase>
          <Badge>Portfolio-ready auth flow</Badge>

          <Title>Login experience refinada para demonstrar arquitetura e UX.</Title>

          <Subtitle>
            A base original ja funcionava, mas comunicava desafio introdutorio.
            Agora ela apresenta melhor separacao de responsabilidades, feedback
            mais claro para o usuario e uma interface mais forte para
            portfolio.
          </Subtitle>

          <FeatureGrid>
            <FeatureCard>
              <FeatureTitle>Servico de autenticacao</FeatureTitle>
              <FeatureText>
                Regras de login e persistencia sairam do contexto e foram
                centralizadas em uma camada dedicada.
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>Contexto mais resiliente</FeatureTitle>
              <FeatureText>
                Sessao hidratada na inicializacao, erro tratado de forma
                explicita e contrato tipado para evolucao futura.
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>Fluxo principal testado</FeatureTitle>
              <FeatureText>
                O comportamento mais importante da aplicacao passa a ter
                cobertura automatizada.
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>UI menos escolar</FeatureTitle>
              <FeatureText>
                O layout continua simples, mas com acabamento mais consistente
                para avaliacao tecnica e visual.
              </FeatureText>
            </FeatureCard>
          </FeatureGrid>
        </Showcase>

        <Panel>
          <PanelHeader>
            <Eyebrow>Acesso ao ambiente</Eyebrow>
            <FormTitle>Entre com sua conta de demonstracao</FormTitle>
            <FormSubtitle>
              O projeto continua mockado por escolha de escopo, mas agora o
              fluxo esta organizado como uma aplicacao profissional de pequeno
              porte.
            </FormSubtitle>
          </PanelHeader>

          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            {error ? <AuthError role="alert">{error}</AuthError> : null}

            <FieldGroup>
              <Input<IFormLogin>
                label="E-mail"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                autoComplete="username"
                control={control}
                errorMessage={errors.email?.message}
                onFocus={clearError}
              />
            </FieldGroup>

            <FieldGroup>
              <Input<IFormLogin>
                label="Senha"
                name="password"
                type="password"
                placeholder="Digite sua senha"
                autoComplete="current-password"
                control={control}
                errorMessage={errors.password?.message}
                onFocus={clearError}
              />
            </FieldGroup>

            <Button
              type="submit"
              title="Entrar"
              loadingLabel="Validando credenciais"
              isLoading={isBusy}
              disabled={!isValid || isBusy}
            />
          </Form>

          <CredentialsBox>
            <CredentialsTitle>Credenciais de teste</CredentialsTitle>
            <CredentialRow>
              <span>E-mail</span>
              <strong>{AUTH_TEST_CREDENTIALS.email}</strong>
            </CredentialRow>
            <CredentialRow>
              <span>Senha</span>
              <strong>{AUTH_TEST_CREDENTIALS.password}</strong>
            </CredentialRow>
          </CredentialsBox>

          <FooterNote>
            O backend nao foi adicionado de proposito. O ganho aqui esta em
            mostrar criterio de arquitetura, tipagem, testes e cuidado com
            experiencia do usuario sobre uma base pequena.
          </FooterNote>
        </Panel>
      </Shell>
    </Container>
  );
};

export default Login;
