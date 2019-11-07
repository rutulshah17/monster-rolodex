import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import "./App.css";

class App extends Component {

	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '' 
		}
	}

	//making an API call via promise to to get the data from external site
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => response.json() )
		.then( users => this.setState( { monsters: users } ) );
	}

	//with arrow function, we do not have to bind "this" in the constructor to use it in this function
	handleChange = (e) => (
		this.setState( { searchField: e.target.value } )
	);

	render() {

		// destructuring, because we do not want to change the original monsters array 
		// received from API call
		const { monsters, searchField } = this.state;
		
		//looping over monsters.name 
		//'includes' searches for the string entered in the searchField by the user
		const filteredMonsters = monsters.filter( monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1> Monsters Rolodex </h1>
				<SearchBox placeholder="Search Monsters" handleChange = {this.handleChange}/>
				<CardList monsters={filteredMonsters} />
			
			</div>
		);
  	}
}

export default App;