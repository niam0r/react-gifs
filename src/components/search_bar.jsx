import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleChange = (event) => {
    console.log(event.target.value);
    // set state
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control form-search"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
