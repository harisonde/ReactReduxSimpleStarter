import React, {Component} from '../node_modules/react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import _ from 'lodash';

const YOU_TUBE_API_KEY = 'AIzaSyD0zBK2ufruZfgzP45YEFVwyvqI-7sgUIM';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos : [],
      selectedVideo: null
    };

    this.videoSearch('Cricket');
  }

  videoSearch(term){
    YTSearch({key: YOU_TUBE_API_KEY, term:term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
    });
  }
    render(){
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);
      return(
        <div>
            <SearchBar onChangeSearchTerm={videoSearch}/>
            <br/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList videos = {this.state.videos} onVideoSelect={(selectedVideo => this.setState({selectedVideo}))}/>
        </div>
      );
    }
}
ReactDom.render(<App />, document.querySelector('.container') );
