import { Link } from "react-router-dom";

// Functions
import { mapNumToWord } from "./utilities";

// Styles
import "./App.css";

// Assets
import logo from "./logo.svg";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interview Question</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Follow instructions in README.md</p>
        <ul>
          {[1, 2, 3, 4].map((num) => (
            <li>
              <Link to={`/${mapNumToWord(num)}`} key={num}>
                Answer preview to question {mapNumToWord(num, true)}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
