import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const rootElment = ReactDOM.createRoot(document.getElementById("root"));
rootElment.render(<AppLayout />);
