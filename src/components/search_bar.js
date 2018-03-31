import React, {Component} from 'react';

class SearchBar extends Component{
render(){
      return(
          <div>
          <br/><br/>
          Enter your search criteria:
          <input type='text' name= 'searchBar'
          onChange={this.onInputChange}/>
          </div>
        );
  }

onInputChange(event){
console.log(event.target.value);
}

}

export default SearchBar;
