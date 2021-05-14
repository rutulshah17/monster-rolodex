> git clone https://github.com/rutulshah17/monsters-rolodex.git
> npm install
> npm start


#ADDING LOGS
index.js
> import { createLogger } from 'redux-logger';
> const logger = createLogger();
> const store = createStore(searchFieldReducer, applyMiddleware(logger));

Adding another action
redux/actions.js
> created fetchMonstersAction with 3 types (need to set reducers using these 3 types)

redux/reducers.js
> created getMonsters

index.js
> import thunkMiddleware from 'redux-thunk';
> import { createStore, applyMiddleware, combineReducers } from 'redux';
> import { searchFieldReducer, getMonsters } from './redux/reducers';
> const rootReducer = combineReducers({ searchFieldReducer, getMonsters })
> const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

App.js
> modified mapStateToProps
    - Now, searchField, monsters, isPending, error can be accessed from this.props
    const mapStateToProps = (state) => ({
        searchField: state.searchFieldReducer.searchField,
        monsters: state.getMonstersReducer.monsters,
        isPending: state.getMonstersReducer.isPending,
        error: state.getMonstersReducer.error
    });

> modified mapDispatchToProps
    - Now, handleChange, getMonsters can be accessed from this.props
    const mapDispatchToProps = (dispatch) => ({
        handleChange: (event) => dispatch( setSearchFieldAction(event.target.value) ),
        getmonsters: () => dispatch( fetchMonstersAction() )
    });

> in order for us to call getMonsters() on componentDidMount, need below
    componentDidMount() {
		this.props.getmonsters();
	}