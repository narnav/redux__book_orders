import React from "react";
import "./App.css";
import { Book } from "./app/componnets/Book";
import { Login } from "./app/componnets/Login";
import Orders from "./app/componnets/Orders";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login></Login>
        <Book></Book>
        <Orders></Orders>
      </header>
    </div>
  );
}

export default App;
