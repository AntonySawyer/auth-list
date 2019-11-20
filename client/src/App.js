import React , { Component } from 'react';

import Toolbar from './components/toolbar';
import Table from './components/table';
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

  checkAll(e) {
    document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = e.target.checked);
  }

  blockUser (ids) {
    fetch('/users/block', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ids: ids
      })
    });
    this.componentDidMount(); // КОСТЫЛЬ!!!! #FixMe
  }

  unblockUser (ids) {
    fetch('/users/unblock', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ids: ids
      })
    });
    this.componentDidMount(); // КОСТЫЛЬ!!!! #FixMe
  }

  deleteUser (ids) {
    fetch('/users/delete', { // СВЕСТИ ВСЁ В ОДНИМ, передавая метод в аргументах
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ids: ids
      })
    });
    this.componentDidMount(); // КОСТЫЛЬ!!!! #FixMe
  }

  render() {
    return (
      <div>
        <Toolbar 
          blockUser={this.blockUser.bind(this)}
          unblockUser={this.unblockUser.bind(this)}
          deleteUser={this.deleteUser.bind(this)}
        />
        <h1>List of users</h1>
        <Table 
          users={this.state.users} 
          checkAll={this.checkAll.bind(this)}
          />
      </div>
    )
  }
}

export default App;
