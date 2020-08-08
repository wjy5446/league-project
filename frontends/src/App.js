import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Header />
    <Switch>
      <Router path="/" exact></Router>
      <Router path="/login" exact></Router>
    </Switch>
    <Footer />
  );
}

export default App;
