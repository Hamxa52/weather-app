import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a
          href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93"
          download
        >
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.gauravghai.dev/"
        >
         Rao Hamza
        </a>{" "}
        | Powered by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.htmlhints.com/"
        >
          HTML HINTS
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
