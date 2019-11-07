import React from "react";
import UserCards from "./UserCards";

const Users = props => {
  return (
    <div className="Users">
      <UserCards
        key={props.users.id}
        login={props.users.login}
        avatar_url={props.users.avatar_url}
        // followers_url={props.users.followers_url}
        // following_url={userdata.following_url}
      />
    </div>
  );
};

export default Users;
