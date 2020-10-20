import React from "react";
import { Link, Route } from "react-router-dom";
import About from "./About";
import "./App.css";
import HistorySample from "./HistorySample";
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
                <li>
                    <Link to="/history">히스토리 샘플</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path={["/about", "/info"]} component={About} />
            <Route path="/profiles" component={Profiles} />
            <Route path="/history" component={HistorySample} />
        </div>
    );
}

export default App;
