import React from "react";

const data = {
    tt: {
        name: "김태남",
        description: "프론트엔드 개발자",
    },
    jiji: {
        name: "서지훈",
        description: "김태남 친구 중 하나",
    },
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];

    if (!profile) {
        return <p>존재하지 않는 사용자입니다.</p>;
    }

    return (
        <div>
            <hr />

            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;
