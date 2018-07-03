import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <Gif />
        </div>
        <div className="right-scene">
          <GifList />
        </div>
      </div>
    );
  }
}
