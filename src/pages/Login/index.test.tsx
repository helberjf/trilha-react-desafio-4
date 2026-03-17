import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderApp } from "../../test-utils/renderApp";

describe("Login page", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("renders the login screen", async () => {
    renderApp();

    expect(
      await screen.findByRole("heading", {
        name: /entre com sua conta de demonstracao/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /entrar/i,
      })
    ).toBeDisabled();
  });

  it("validates email and password fields", async () => {
    renderApp();

    userEvent.type(screen.getByLabelText(/e-mail/i), "email-invalido");
    userEvent.tab();

    expect(await screen.findByText(/e-mail invalido/i)).toBeInTheDocument();

    userEvent.type(screen.getByLabelText(/senha/i), "123");
    userEvent.tab();

    expect(
      await screen.findByText(/minimo de 6 caracteres/i)
    ).toBeInTheDocument();
  });

  it("shows an authentication error for invalid credentials", async () => {
    renderApp();

    userEvent.type(screen.getByLabelText(/e-mail/i), "admin@dio.com");
    userEvent.type(screen.getByLabelText(/senha/i), "senha01");
    const submitButton = screen.getByRole("button", {
      name: /entrar/i,
    });

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });

    userEvent.click(submitButton);

    expect(await screen.findByRole("alert")).toHaveTextContent(
      /credenciais invalidas/i
    );
  });
});
