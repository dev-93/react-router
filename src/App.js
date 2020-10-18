import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
    );
}

export default App;
