import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyAjpNT8BmbKbUkcS6mOtoSfSiToiVG2Xs4';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('React JS');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      }
    );
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="row app">
          <VideoDetail video={ this.state.selectedVideo } />
          <VideoList
            videos={ this.state.videos }
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('holder'));
