import * as React from "react";
import ReactDOM from "react-dom";
import { CreatePage } from "./pages/create";
import { TicketsPage } from "./pages/tickets";
import { OwnerPage } from "./pages/owner";
import { DoPage } from "./pages/do";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/owner/create">
          <CreatePage />
        </Route>
        <Route path="/owner">
          <OwnerPage />
        </Route>
        <Route path="/do">
          <DoPage />
        </Route>
        <Route path="/">
          <TicketsPage />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
