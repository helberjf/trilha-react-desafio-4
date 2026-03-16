import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { useAuth } from "../../contexts/AuthContext";
import { defaultValues, IFormLogin } from "./types";
import {
  AuthError,
  Card,
  Container,
  DemoBox,
  Form,
  Spacing,
  Subtitle,
  Title,
} from "./styles";

const schema: yup.SchemaOf<IFormLogin> = yup
  .object({
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("E-mail inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [authError, setAuthError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async (data: IFormLogin) => {
    setAuthError("");

    const success = await login(data.email, data.password);

    if (!success) {
      setAuthError("E-mail ou senha inválidos.");
      return;
    }

    navigate("/home");
  };

  return (
    <Container>
      <Card>
        <Title>Login</Title>
        <Subtitle>
          Projeto de autenticação com TypeScript, validação de formulário e rota
          protegida.
        </Subtitle>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {authError ? <AuthError>{authError}</AuthError> : null}

          <Spacing>
            <Input<IFormLogin>
              label="E-mail"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              control={control}
              errorMessage={errors.email?.message}
            />
          </Spacing>

          <Spacing>
            <Input<IFormLogin>
              label="Senha"
              name="password"
              type="password"
              placeholder="Digite sua senha"
              control={control}
              errorMessage={errors.password?.message}
            />
          </Spacing>

          <Button
            type="submit"
            title={isSubmitting ? "Entrando..." : "Entrar"}
            disabled={!isValid || isSubmitting}
          />
        </Form>

        <DemoBox>
          <p>
            <strong>Credenciais para teste</strong>
            <br />
            E-mail: admin@dio.com
            <br />
            Senha: 123456
          </p>
        </DemoBox>
      </Card>
    </Container>
  );
};

export default Login;