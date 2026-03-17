import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./global";
import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyles />
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
