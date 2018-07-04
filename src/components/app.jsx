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
      gifs: [
        {id: 'dbtDDSvWErdf2'},
        {id: 'dbtDDSvWErdf2'}
      ]
    };

    this.search('it crowd');
  }

  search = (query) => {
    giphy('7Aj3Cf9FmOPeA5LFDbGZ3kMgFZ11oisD').search({
        q: query,
        rating: 'g'
    }, function (err, res) {
        console.log(res);
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}
