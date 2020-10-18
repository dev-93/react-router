import React from "react";
import qs from "qs";

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        //query 문자열을 객체로 변환하기 위해 qs 라이브러리 사용
        ignoreQueryPrefix: true, // 문자열 맨 앞의 ? 생략
    });

    const showDetail = query.detail === "true";
    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터 기초 연습</p>
            {showDetail && <p>detail 값을 true로 설정함</p>}
        </div>
    );
};

export default About;
