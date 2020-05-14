import React from "react";
import "./appLayout.scss";

export const AppLayout = (props) => {
  const { children, appHeader: AppHeader } = props;

  return (
    <main>
      <AppHeader />
      <section className="app-layout">{children}</section>
    </main>
  );
};
