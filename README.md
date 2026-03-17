# Auth Flow Showcase

Aplicacao React + TypeScript focada em demonstrar um fluxo de autenticacao front-end bem organizado sobre uma base pequena, sem reescrever o projeto do zero.

O projeto evolui um desafio funcional para uma entrega mais forte de portfolio, com separacao de responsabilidades, rota privada previsivel, persistencia de sessao e cobertura de testes para o fluxo principal.

## Funcionalidades

- Login com validacao de formulario usando `react-hook-form` + `yup`
- Autenticacao mockada organizada em camada de servico
- Contexto global de autenticacao com tipagem mais solida
- Persistencia de sessao com `localStorage`
- Rota privada com tratamento de hidratacao inicial
- Home protegida com informacoes do usuario autenticado
- Logout com limpeza de sessao
- Testes automatizados dos cenarios mais importantes

## Tecnologias

- React 18
- TypeScript
- React Router DOM v6
- React Hook Form
- Yup
- Styled Components
- Create React App
- Testing Library

## Arquitetura resumida

O projeto continua simples por escolha de escopo, mas foi organizado para ficar mais legivel e evolutivo:

- [`src/contexts/AuthContext.tsx`](./src/contexts/AuthContext.tsx): estado global da sessao, loading inicial, erros e acoes de login/logout
- [`src/services/auth/authService.ts`](./src/services/auth/authService.ts): autenticacao mockada, persistencia e normalizacao do fluxo de auth
- [`src/routes/AppRoutes.tsx`](./src/routes/AppRoutes.tsx): definicao central das rotas
- [`src/routes/PrivateRoute.tsx`](./src/routes/PrivateRoute.tsx): protecao da Home com espera pela hidratacao inicial
- [`src/pages/Login`](./src/pages/Login): formulario, validacao e feedbacks de UX
- [`src/pages/Home`](./src/pages/Home): painel protegido com apresentacao mais profissional
- [`src/test-utils/renderApp.tsx`](./src/test-utils/renderApp.tsx): helper para testes com providers e rotas

## Como rodar localmente

### 1. Instale as dependencias

```bash
npm install
```

### 2. Inicie o projeto

```bash
npm start
```

Aplicacao disponivel em `http://localhost:3000`.

### 3. Execute os testes

```bash
npm run test:ci
```

### 4. Gere o build de producao

```bash
npm run build
```

## Credenciais de teste

- E-mail: `admin@dio.com`
- Senha: `123456`

## Fluxos cobertos por teste

- Renderizacao da tela de login
- Validacao de e-mail e senha
- Login com sucesso
- Login com falha
- Protecao de rota privada sem sessao ativa

## Decisoes e trade-offs

- A autenticacao continua mockada para manter o foco no front-end e preservar a base original
- A camada de servico foi introduzida para evitar regra hardcoded dentro do contexto
- `localStorage` foi mantido por compatibilidade, mas agora com responsabilidade mais bem delimitada
- O projeto segue em CRA por requisito do desafio e para evitar migracao desnecessaria

## Melhorias futuras

- Integrar com API real e refresh token
- Adicionar testes para reidratacao de sessao e logout
- Criar feedback visual para estados globais de erro e carregamento
- Introduzir temas e tokens de design compartilhados por pagina
- Adicionar pipeline de CI para executar testes e build automaticamente

## Valor de portfolio

Esta base mostra uma habilidade importante para contextos reais: pegar um projeto pequeno que ja funciona, identificar os pontos de fragilidade e melhora-lo com criterio tecnico, sem cair na armadilha de reescrever tudo do zero.
