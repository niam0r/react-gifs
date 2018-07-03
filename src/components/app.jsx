import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGifId: 'dbtDDSvWErdf2',
      gifs: []
    };
  }
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <Gif id={this.state.selectedGifId}/>
        </div>
        <div className="right-scene">
          <GifList />
        </div>
      </div>
    );
  }
}
