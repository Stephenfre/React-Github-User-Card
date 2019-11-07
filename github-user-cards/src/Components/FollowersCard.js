import React from "react";
import styled from "styled-components";

const FollowCardStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: white;
  width: 25%;
`;

const FollowImg = styled.img`
  width: 45%;
  height: 50%;
  border-radius: 120px;
}
`;

const FollowersCard = props => {
  return (
    <FollowCardStyle className="follower-card">
      <FollowImg src={props.avatar_url} alt="User Picture" />
      <p>{props.login}</p>
      <p>{props.html_url}</p>
    </FollowCardStyle>
  );
};

export default FollowersCard;
