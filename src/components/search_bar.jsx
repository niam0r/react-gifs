import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleChange = (event) => {
    this.props.searchFn(event.target.value);
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
