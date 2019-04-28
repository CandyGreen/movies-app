import * as actionTypes from './actionTypes';

export const getMovies = (searchString, page) => {
    return {
        type: actionTypes.INITIATE_FETCH_MOVIES,
        searchString,
        page
    };
};

export const fetchMovies = (movies, currentPage, totalPages) => {
    return {
        type: actionTypes.FETCH_MOVIES,
        movies,
        currentPage,
        totalPages
    };
};

export const toggleLoading = status => {
    return {
        type: actionTypes.TOGGLE_LOADING,
        status
    };
};