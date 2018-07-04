import React, { Component } from 'react';
import giphy from 'giphy-api';

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

    this.search('it crowd');
  }

  search = (query) => {
    giphy({GIPHY_API_KEY: '7Aj3Cf9FmOPeA5LFDbGZ3kMgFZ11oisD', https: true }).search({
        q: query,
        rating: 'g'
    }, (err, res) => {
      this.setState({ gifs: res.data });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFn={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}
