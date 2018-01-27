import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logo from './logo.svg';
import './App.css';

import { loadOwner } from '../state/owner/actions';
import { loadRepos } from '../state/repos/actions';

import Search from '../Search';
import Owner from '../Owner';
import Repo from '../Repo';

class App extends Component {
  constructor(props) {
    super(props);
  }
  handleSearch = (name) => {
    this.props.loadOwner(name);
  }

  handleLoadReposClick = (event) => {
    event.preventDefault();

    this.props.loadRepos(this.props.owner.repos_url);
  }

  render() {
    const { owner, repos } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='App-body'>
          <Search onSearch={this.handleSearch} />
          {owner && <Owner data={owner} onClick={this.handleLoadReposClick} />}
          {repos && repos.map(repo => <Repo key={repo.id} data={repo} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  owner: state.owner,
  repos: state.repos
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadOwner,
  loadRepos
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
