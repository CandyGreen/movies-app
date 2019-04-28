import { takeEvery } from 'redux-saga/effects';

import { fetchMoviesSaga } from './movies';
import * as actionTypes from '../actionTypes';

export function* watchMovies() {
    yield takeEvery(actionTypes.INITIATE_FETCH_MOVIES, fetchMoviesSaga);
}