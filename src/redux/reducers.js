const INITIAL_STATE_SEARCHFIELD = {
    searchField: ''
}

export const searchFieldReducer = ( state = INITIAL_STATE_SEARCHFIELD, action ) => {
    switch (action.type) {
        case 'SET_SEARCH_FIELD':
            return {
                ...state,
                searchField: action.payload
            }    
        default:
            return state;
    }
};

const INITIAL_STATE_MONSTERS = {
    isPending: false,
    monsters: [],
    error: ''
}

export const getMonstersReducer = ( state = INITIAL_STATE_MONSTERS, action) => {
    switch (action.type) {
        case 'FETCH_MONSTERS_PENDING':
            return {
                ...state,
                isPending: true
            }
        case 'FETCH_MONSTERS_SUCCESS':
            return {
                ...state,
                isPending: false,
                monsters: action.payload
            }
        case 'FETCH_MONSTERS_FAIL':
            return{
                ...state,
                isPending: false,
                error: action.payload
            }
        default:
            return state;
    }
}