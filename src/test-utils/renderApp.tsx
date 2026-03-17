import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import AppRoutes, { APP_ROUTES } from "../routes/AppRoutes";

interface RenderAppOptions {
  initialEntries?: string[];
}

export function renderApp({
  initialEntries = [APP_ROUTES.login],
}: RenderAppOptions = {}) {
  return render(
    <AuthProvider>
      <MemoryRouter
        initialEntries={initialEntries}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AppRoutes />
      </MemoryRouter>
    </AuthProvider>
  );
}
