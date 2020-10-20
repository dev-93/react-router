import React from "react";
import { Link, Route, Switch } from "react-router-dom";
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

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path={["/about", "/info"]} component={About} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/history" component={HistorySample} />
                <Route
                    render={({ location }) => (
                        <>
                            <h2>이 페이지는 존재하지 않습니다.</h2>
                            <p>{location.pathname}</p>
                        </>
                    )}
                />
            </Switch>
        </div>
    );
}

export default App;
