import React from "react";
import "./App.css";
import Users from "./Components/Users.js";

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
      <div className="Container">
        <h1>Github User Cards</h1>
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
