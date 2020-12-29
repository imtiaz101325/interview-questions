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
        <ul style={{ textAlign: "left" }}>
          {[1, 2, 3 ].map((num) => (
            <li style={{ listStyle: "none" }}>
              <Link
                to={`/${mapNumToWord(num)}`}
                key={num}
                style={{ color: "#fff" }}
              >
                Answer preview to question {mapNumToWord(num, true)}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
