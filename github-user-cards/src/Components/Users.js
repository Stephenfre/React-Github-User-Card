import React from "react";
import UserCards from "./UserCards";
import styled from "styled-components";

const UsersContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
`;

const Users = props => {
  return (
    <UsersContainer className="Users">
      <UserCards
        key={props.users.id}
        name={props.users.name}
        login={props.users.login}
        avatar_url={props.users.avatar_url}
        bio={props.users.bio}
        html_url={props.users.html_url}
      />
    </UsersContainer>
  );
};

export default Users;
