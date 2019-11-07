import React from "react";
import "./App.css";
import Users from "./Components/Users.js";
import Followers from "./Components/Followers.js";
import styled from "styled-components";

const ContainerApp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: rgb(58, 125, 180);
  background: linear-gradient(
    223deg,
    rgba(58, 125, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
`;

class App extends React.Component {
  state = {
    users: [],
    isLoading: false
  };

  getFetch = async URL => {
    try {
      const fetchData = await fetch(URL);
      const res = await fetchData.json();
      console.log("You did it", res);
      this.setState({ users: res });
      this.setState({ isLoading: false });
    } catch (err) {
      throw new Error(err);
    }
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getFetch("https://api.github.com/users/Stephenfre");
  }

  render() {
    if (this.state.isLoading === true) {
      return null;
    }

    return (
      <ContainerApp className="Container">
        <h1>Github User Cards</h1>
        <Users users={this.state.users} />
        <Followers />
      </ContainerApp>
    );
  }
}

export default App;
