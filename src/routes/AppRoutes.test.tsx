import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AUTH_TEST_CREDENTIALS } from "../services/auth/authService";
import { renderApp } from "../test-utils/renderApp";
import { APP_ROUTES } from "./AppRoutes";

describe("App routes", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("allows login with valid credentials", async () => {
    renderApp();

    userEvent.type(
      screen.getByLabelText(/e-mail/i),
      AUTH_TEST_CREDENTIALS.email
    );
    userEvent.type(
      screen.getByLabelText(/senha/i),
      AUTH_TEST_CREDENTIALS.password
    );
    const submitButton = screen.getByRole("button", {
      name: /entrar/i,
    });

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });

    userEvent.click(submitButton);

    expect(
      await screen.findByRole("heading", {
        name: /bem-vindo, helber/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(AUTH_TEST_CREDENTIALS.email)).toBeInTheDocument();
  });

  it("protects the private route when there is no active session", async () => {
    renderApp({ initialEntries: [APP_ROUTES.home] });

    expect(
      await screen.findByRole("heading", {
        name: /entre com sua conta de demonstracao/i,
      })
    ).toBeInTheDocument();
  });
});
