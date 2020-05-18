import React from "react";
import { Link } from "react-router-dom";
import "./appNavigation.scss";
import { useSelector } from "react-redux";

export const AppNavigation = () => {
  const { isUserLoggedIn } = useSelector((state) => state.auth);

  return (
    <nav className="app-navigation">
      <Link to="/" className="app-navigation-item">
        Oferty pracy
      </Link>
      <Link to="/create-offer" className="app-navigation-item">
        Dodaj ogłoszenie
      </Link>
      {isUserLoggedIn && (
        <Link to="/user-offer" className="app-navigation-item">
          Twoje ogłoszenia
        </Link>
      )}
    </nav>
  );
};
