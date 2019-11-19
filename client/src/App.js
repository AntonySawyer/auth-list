import React , { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({users}));
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        {
          this.state.users.map(user => < div key = {
                user.id
              } > {
                `${user.id} - ${user.username} - ${user.link} - ${user.status} - ${user.first_date} - ${user.last_time}`
              } </div>)}
      </div>
    )
  }
}

export default App;
