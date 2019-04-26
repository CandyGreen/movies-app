import * as actionTypes from './actionTypes';

const initialState = {
    movies: null,
    currentPage: 1,
    totalPages: null,
    isLoading: false
};

const fetchMovies = (state, action) => {
    return {
        ...state,
        movies: action.movies,
        currentPage: action.currentPage,
        totalPages: action.totalPages
    };
};

const toggleLoading = (state, action) => {
    return {
        ...state,
        isLoading: action.status
    };
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES: return fetchMovies(state, action);
        case actionTypes.TOGGLE_LOADING: return toggleLoading(state, action);
        default: return state;
    }
};

export default rootReducer;