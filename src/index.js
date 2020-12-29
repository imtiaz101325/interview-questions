import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import App from "./App";
import One from "./Questions/One"
// import Two from "./Questions/Two"
// import Three from "./Questions/Three"
// import Four from "./Questions/Four"

// Functions
import reportWebVitals from "./reportWebVitals";

// Styles
import "./index.css";
import { mapNumToWord } from "./utilities";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        {[1, 2, 3, 4].map((num) => (
          <Route path={`/${mapNumToWord(num)}`}>
            <One />
          </Route>
        ))}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
