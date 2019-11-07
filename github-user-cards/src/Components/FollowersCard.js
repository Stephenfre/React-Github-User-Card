import React from "react";

const FollowersCard = props => {
  return (
    <div>
      <img src={props.avatar_url} alt="User Picture" />
      <p>{props.login}</p>
      <p>{props.html_url}</p>
    </div>
  );
};

export default FollowersCard;
