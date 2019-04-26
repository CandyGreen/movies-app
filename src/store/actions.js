import * as actionTypes from './actionTypes';

export const getMovies = (searchString, page) => {
    return dispatch => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=b4b3112c20c29338f2e6080e89f42217&language=en-US&query=${searchString}&page=${ page ? page : 1 }&include_adult=false`;

        dispatch(toggleLoading(true));

        fetch(url)
            .then(res => res.json())
            .then(search => {
                const movies = [];

                for (const movie of search.results) {
                    const { id, title, poster_path, overview, release_date, backdrop_path } = movie;

                    movies.push({
                        id,
                        title,
                        poster: poster_path,
                        overview,
                        releaseDate: release_date,
                        backdropPath: backdrop_path
                    });
                }

                dispatch(toggleLoading(false));
                dispatch(fetchMovies(movies, page ? page : 1, search.total_pages));
            })
            .catch(err => console.log(err));
    };
};

const fetchMovies = (movies, currentPage, totalPages) => {
    return {
        type: actionTypes.FETCH_MOVIES,
        movies,
        currentPage,
        totalPages
    };
};

const toggleLoading = status => {
    return {
        type: actionTypes.TOGGLE_LOADING,
        status
    };
};