import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './style.css'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  handleButtonClick = () => {
    this.props.onSearch(this.input.value);
  }

  handleInputPress = (event) => {
    if(event.key === 'Enter') {
      this.handleButtonClick();
    }
  }

  render() {
    return (
      <p className="git__search_panel">
        <input ref={input => this.input = input} onKeyPress={this.handleInputPress} />
        <button onClick={this.handleButtonClick}>Get git data</button>
      </p>)
  }
}

export default Search;