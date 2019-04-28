import rootReducer from './rootReducer';
import * as actionTypes from './actionTypes';

describe('rootReducer', () => {
    let initialState = null;

    beforeEach(() => {
        initialState = {
            movies: null,
            currentPage: 1,
            totalPages: null,
            isLoading: false
        };
    });

    it('should return initial state if no state was passed', () => {
        expect(rootReducer(undefined, {})).toEqual(initialState);
    });
    
    it('should set isLoading to TRUE, when TOGGLE_LOADING was fired', () => {
        const action = {
            type: actionTypes.TOGGLE_LOADING,
            status: true
        };

        expect(rootReducer(initialState, action)).toEqual({
            movies: null,
            currentPage: 1,
            totalPages: null,
            isLoading: true
        });
    });
    
    it('should set movies, currentPage and totalPages, when FETCH_MOVIES was fired', () => {
        const action = {
            type: actionTypes.FETCH_MOVIES,
            movies: [],
            currentPage: 2,
            totalPages: 220
        };

        expect(rootReducer(initialState, action)).toEqual({
            movies: [],
            currentPage: 2,
            totalPages: 220,
            isLoading: false
        });
    });
});