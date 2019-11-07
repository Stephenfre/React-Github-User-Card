import React from "react";
import FollowersCard from "./FollowersCard";

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
      <div className="followers">
        {this.state.followers.map(follower => (
          <FollowersCard
            key={follower.id}
            login={follower.login}
            avatar_url={follower.avatar_url}
            html_url={follower.html_url}
          />
        ))}
      </div>
    );
  }
}

export default Followers;
