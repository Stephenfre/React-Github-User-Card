import React from "react";
import Followers from "./Followers.js";

const UserCards = props => {
  return (
    <div className="Users">
      <img src={props.avatar_url} alt="User Picture" />
      <p>{props.login}</p>
      <Followers />
      {/* <Following following_url={props.following_url} /> */}
    </div>
  );
};

export default UserCards;
