import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./global";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;