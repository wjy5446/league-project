import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Switch>
        <Route
          path={["/", "/league", "/team", "/myleague", "/myteam"]}
          component={HomePage}
          exact
        />
        <Route path="/login" exact />
      </Switch>
    </>
  );
}

export default App;
