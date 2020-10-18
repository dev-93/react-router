import React from "react";
import { Link, Route } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";
import Profiles from "./Profiles";

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
                    <Link to="/profiles">프로필</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path={["/about", "/info"]} component={About} />
            <Route path="/profiles" component={Profiles} />
        </div>
    );
}

export default App;
