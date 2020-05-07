import React from 'react';
import './appLayout.scss';

export const AppLayout = (props) => {
  const { children } = props;

  return (
    <section className="app-layout">
      {children}
    </section>
  )
}