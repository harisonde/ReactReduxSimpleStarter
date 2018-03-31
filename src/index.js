import React from '../node_modules/react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
const YOU_TUBE_API_KEY = 'AIzaSyD0zBK2ufruZfgzP45YEFVwyvqI-7sgUIM';

const App = () => {
return <div>
  <SearchBar/>
</div>;
};

ReactDom.render(<App />, document.querySelector('.container') );
