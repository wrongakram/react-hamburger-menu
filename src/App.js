import React from "react";
import "./App.scss";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="home">
            <p>Click the menu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
