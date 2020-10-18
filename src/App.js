import React from "react";
import { Link, Route } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";

function App() {
    return (
        <div className="App">
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/info">똑같은 소개</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path={["/about", "/info"]} component={About} />
        </div>
    );
}

export default App;
