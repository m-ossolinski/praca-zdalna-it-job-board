import React from 'react';
import { Link } from 'react-router-dom';
import './appNavigation.scss';

const appNavigationConfig = [
  { id: 'offers', path: '/', title: 'Oferty pracy' },
  { id: 'postOffer', path: '/post-a-job', title: 'Dodaj ogłoszenie' },
  { id: 'myOffers', path: '/my-offers', title: 'Twoje ogłoszenia' },
]

export const AppNavigation = () => {
  return (
    <nav className="app-navigation">

      {appNavigationConfig.map(({ path, id, title}) => (
        <Link
          key={id}
          to={path}
          className="app-navigation-item"
        >
          {title}
        </Link>
      ))}

    </nav>
  )
}