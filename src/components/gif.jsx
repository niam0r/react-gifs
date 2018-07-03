import React, { Component } from 'react';

export default class Gif extends Component {
  render() {
    let src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <div>
        <img src={src} alt="" className="selected-gif"/>
      </div>
    );
  }
}
