import _  from 'lodash'
import React, { Component } from 'react'
import ReactDOM  from 'react-dom'
import YTSearch  from 'youtube-api-search'
import SearchBar  from './components/search_bar'
import VideoDetail  from './components/video_detail'
import VideoList  from './components/video_list'

const API_KEY = "AIzaSyC830buQ2rdojPKEylBvRmApse3e_TbtC4";

// Create new component that creates some HTML
// const App = function () {  ES5
//   return <div>Hi!</div>;
// }
// const App = () => {
//   return (
//     <div>
//       <SearchBar/>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    //this.state = {'term': 'Thalli Pogathey'};

    this.videoSearch('Thalli Pogathey')


  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => { // videos is our semantically named data
      // ALT: this.state.videos = videos
      // ES6 syntatic sugar: this.setState({videos}) === this.setState({videos: videos})
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  // parent App's state is passed as props to children
  render() {

    const videoSearch = _.debounce((term) => this.videoSearch(term), 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Render this generated component in the index.html page (DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
