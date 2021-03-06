import { Component } from 'react';
import { Searchbox } from './components/search-box/searchbox.components';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component  {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState ({monsters: users}));
  }

   handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render () {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
    <h1>Monster Friendz</h1>
    <Searchbox placeholder='search monsters' handleChange={this.handleChange} />
    <CardList monsters={filteredMonsters}/>
  </div>
  );
  
};
}

export default App;
