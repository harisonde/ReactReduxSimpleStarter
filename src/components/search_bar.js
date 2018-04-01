import React, {Component} from 'react';

class SearchBar extends Component{

constructor(props){
  super(props);

  this.state = {
      term: ''
  };
}

render(){
      return(
      <div className="search-bar">
          <br/><br/>
          <input type='text'
            value = {this.state.term}
            onChange={event => this.onInputChange(event.target.value)}/>
        </div>
        );
  }

onInputChange(term){
  this.setState({term});
  this.props.onChangeSearchTerm(term);
}
}

export default SearchBar;
