import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
    const activeStyle = {
        background: "purple",
        color: "white",
    };
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/tt" active>
                        태남 프로필
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/jiji">
                        지훈 프로필
                    </NavLink>
                </li>
            </ul>

            <Route exact path="/profiles" render={() => <div>사용자를 선택해 주세요.</div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
};

export default Profiles;
