import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";
import { Card, Container, Highlight, Text, Title } from "./styles";

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Container>
      <Card>
        <Title>Área logada</Title>

        <Text>
          Usuário autenticado com sucesso:{" "}
          <Highlight>{user?.email}</Highlight>
        </Text>

        <Text>
          Aqui você prova que sabe:
          <br />- TypeScript
          <br />- validação com react-hook-form + yup
          <br />- contexto de autenticação
          <br />- persistência com localStorage
          <br />- rota privada
        </Text>

        <Button title="Sair" onClick={handleLogout} />
      </Card>
    </Container>
  );
};

export default Home;