import React from "react";
import { NavLink } from "react-router-dom";

const Navigation: any = ({
  user,
  logout,
}: {
  user: { username: string };
  logout: Function;
}) => {
  return (
    <nav>
      <NavLink to="/login">login </NavLink>
      <NavLink to="/register">register </NavLink>
      <NavLink to="/dashboard">dashboard </NavLink>
      <NavLink to="/">about-us </NavLink>
      {user?.username && <button onClick={() => logout()}>logout</button>}
    </nav>
  );
};

export default Navigation;
