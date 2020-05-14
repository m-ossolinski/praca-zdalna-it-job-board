import React from "react";
import { Link } from "react-router-dom";
import "./appNavigation.scss";
import { useSelector } from "react-redux";

export const AppNavigation = () => {
  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const requiredUserLogin = true;
  console.log(requiredUserLogin && isUserLoggedIn, "useruser");

  return (
    <nav className="app-navigation">
      <Link to="/" className="app-navigation-item">
        Oferty pracy
      </Link>
      <Link to="/post-a-job" className="app-navigation-item">
        Dodaj ogłoszenie
      </Link>
      {isUserLoggedIn && (
        <Link to="/my-offers" className="app-navigation-item">
          Twoje ogłoszenia
        </Link>
      )}
    </nav>
  );
};
