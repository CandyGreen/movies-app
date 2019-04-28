import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* fetchMoviesSaga({ searchString, page }) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=b4b3112c20c29338f2e6080e89f42217&language=en-US&query=${searchString}&page=${ page ? page : 1 }&include_adult=false`;

    yield put(actions.toggleLoading(true));

    try {
        const search = yield fetch(url).then(res => res.json());
        
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
    
        yield put(actions.toggleLoading(false));
        yield put(actions.fetchMovies(movies, page ? page : 1, search.total_pages));
    } catch (err) {
        console.log(err);
    }
}