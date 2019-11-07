import React from "react";
import FollowersCard from "./FollowersCard";
import styled from "styled-components";

const FollowersStyled = styled.div`
  display: flex;
  height: 60%;
  justify-content: space-evenly;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const FollowersFlex = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  width: 100%;
`;

class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // followersUrl: props.followers_url,
      followers: [],
      isLoading: false
    };
  }

  getFollowersFetch = async URL => {
    try {
      const fetchingData = await fetch(URL);
      const res = await fetchingData.json();
      console.log(res);
      this.setState({ followers: res });
      this.setState({ isLoading: false });
    } catch (err) {
      throw new Error(err);
    }
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getFollowersFetch("https://api.github.com/users/Stephenfre/followers");
  }

  render() {
    if (this.state.isLoading === true) {
      return null;
    }
    return (
      <FollowersStyled className="followers">
        <h1>Followers</h1>
        <FollowersFlex>
          {this.state.followers.map(follower => (
            <FollowersCard
              key={follower.id}
              login={follower.login}
              avatar_url={follower.avatar_url}
              html_url={follower.html_url}
            />
          ))}
        </FollowersFlex>
      </FollowersStyled>
    );
  }
}

export default Followers;
