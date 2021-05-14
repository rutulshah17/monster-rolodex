export const setSearchFieldAction = (userInput) => ({
    type: 'SET_SEARCH_FIELD',
    payload: userInput
});

export const fetchMonstersAction = () => ( dispatch ) => {
    dispatch({ type: 'FETCH_MONSTERS_PENDING' });
    fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => response.json() )
		.then( data => dispatch({ type: 'FETCH_MONSTERS_SUCCESS', payload: data }) )
        .catch( error => dispatch({ type: 'FETCH_MONSTERS_FAIL', payload: error }) )
}