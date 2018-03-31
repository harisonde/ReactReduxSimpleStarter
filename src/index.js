import React, {Component} from '../node_modules/react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const YOU_TUBE_API_KEY = 'AIzaSyD0zBK2ufruZfgzP45YEFVwyvqI-7sgUIM';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos : []
    };

    YTSearch({key: YOU_TUBE_API_KEY, term:'cricket'}, (videos) => {
        this.setState({videos});
    });
  }

    render(){
      return(
        <div>
            <SearchBar/>
            <VideoList videos = {this.state.videos}/>
        </div>
      );
    }
}

ReactDom.render(<App />, document.querySelector('.container') );
