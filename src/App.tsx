import React, { Fragment } from "react";
import "./App.css";
import { useAuth } from "./context/authContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./pages/about-us";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import DashboardPage from "./pages/dashboard";
import ProtectedRoute from "./utility/protectedRoute";
import { GlobalStyles } from "./styles/globalStyles";
import LogoutPage from "./pages/logout";
import routes from "./pages/routes";

function App() {
  const { user } = useAuth();
  console.log("====================================");
  console.log("user", user);
  console.log("====================================");

  return (
    <Fragment>
      <Router>
        <GlobalStyles />

        <Routes>
          {/* Public routes */}
          <Route index element={<AboutUsPage />} />
          <Route path={routes.LOGIN} element={<LoginPage />} />
          <Route path={routes.REGISTER} element={<RegisterPage />} />
          <Route path={routes.LOGOUT} element={<LogoutPage />} />

          {/* Protected route */}
          <Route
            path={routes.DASHBOARD}
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
