import React from "react";
import QuestionsScreen from "./components/QuestionsScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/welcome" component={WelcomeScreen} />
          <Route path="/questions" component={QuestionsScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
