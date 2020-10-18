import React from "react";
import { Link, Route } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";
import Profile from "./Profile";

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
                    <Link to="/profile/tt">태남 프로필</Link>
                </li>
                <li>
                    <Link to="/profile/jiji">지훈 프로필</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path={["/about", "/info"]} component={About} />
            <Route path="/profile/:username" component={Profile} />
        </div>
    );
}

export default App;
