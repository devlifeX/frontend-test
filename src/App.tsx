import React, { Fragment } from "react";
import "./App.css";
import { useAuth } from "./context/authContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./pages/about-us";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import DashboardPage from "./pages/dashboard";
import ProtectedRoute from "./routes/protectedRoute";
import Navigation from "./components/navigation/navigation";
import { GlobalStyles } from "./components/styles/globalStyles";

function App() {
  const { user, logout } = useAuth();
  console.log("====================================");
  console.log("user", user);
  console.log("====================================");

  return (
    <Fragment>
      <Router>
        <GlobalStyles />
        <Navigation user={user} logout={logout} />

        <Routes>
          {/* Public routes */}
          <Route index element={<AboutUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          {/* Redirect to login for all other routes */}
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
