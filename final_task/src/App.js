import React from "react";
import { Header } from "./components";
import { Home, Cart, Card } from "./pages";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/card/:id" component={Card} exact />
      </div>
    </div>
  );
}
export default App;
