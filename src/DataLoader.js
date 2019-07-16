import React from "react";

export default class DataLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ users: data, isLoading: false }));
  }

  render() {
    return (
      <ul>
        {this.state.users.map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
    );
  }
}
