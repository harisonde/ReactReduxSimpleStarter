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
      <div>
          <br/><br/>
          Enter your search criteria:
          <input type='text'
            value = {this.state.term}
            onChange={event  => this.setState({...this.state, term: event.target.value})}/>
        </div>
        );
  }

onInputChange(event){
}
}

export default SearchBar;
