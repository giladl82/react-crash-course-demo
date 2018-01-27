import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from '../Search';
import Owner from '../Owner';
import Repo from '../Repo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: null,
      repos: null,
    }
  }
  handleSearch = (name) => {
    fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(json => this.setState({
        owner: json
      }));
  }

  handleLoadReposClick = (event) => {
    event.preventDefault();

    fetch(this.state.owner.repos_url)
      .then(response => response.json())
      .then(json => this.setState({
        repos: json
      }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='App-body'>
          <Search onSearch={this.handleSearch} />
          {this.state.owner && <Owner data={this.state.owner} onClick={this.handleLoadReposClick} />}
          {this.state.repos && this.state.repos.map(repo => <Repo  key={repo.id} data={repo} />)}
        </div>
      </div>
    );
  }
}

export default App;
