import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { setSearchFieldAction, fetchMonstersAction } from './redux/actions';
import "./App.css";

class App extends Component {

	componentDidMount() {
		this.props.getmonsters();
	}

	render() {
		const { searchField, handleChange, monsters, isPending } = this.props;
		
		//looping over monsters.name 
		//'includes' searches for the string entered in the searchField by the user
		const filteredMonsters = monsters.filter( monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return isPending
		? <h1> Loading ... </h1>
		: (
			<div className="App">
				<h1> Monsters Rolodex </h1>
				<SearchBox placeholder="Search Monsters" handleChange = {handleChange}/>
				<CardList monsters={filteredMonsters} />
			
			</div>
		);
  	}
}

const mapStateToProps = (state) => ({
	searchField: state.searchFieldReducer.searchField,
	monsters: state.getMonstersReducer.monsters,
	isPending: state.getMonstersReducer.isPending,
	error: state.getMonstersReducer.error
});

const mapDispatchToProps = (dispatch) => ({
	handleChange: (event) => dispatch( setSearchFieldAction(event.target.value) ),
	getmonsters: () => dispatch( fetchMonstersAction() )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);