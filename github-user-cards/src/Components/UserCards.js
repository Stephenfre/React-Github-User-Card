import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserCard = styled.div`
  border-radius: 15px;
  width: 40%;
  height: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  background: white;
`;

const UsersImg = styled.img`
  width: 30%;
  border-radius: 100px;
`;

const PContainer = styled.p`
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  margin: 0;
`;

const UserCards = props => {
  return (
    <Container className="Users-card">
      <UserCard className="Users-content">
        <UsersImg src={props.avatar_url} alt="User Picture" />
        <PContainer>
          <P>{props.name}</P>
          <P>{props.login}</P>
          <P>{props.bio}</P>
          <P>{props.location}</P>
          <P>{props.html_url}</P>
        </PContainer>
      </UserCard>
    </Container>
  );
};

export default UserCards;
