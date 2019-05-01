import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Toolbar from '../Toolbar/Toolbar';
import Movie from './Movie/Movie';
import Pagination from '../Pagination/Pagination';
import './Movies.scss';

const Movies = props => {
    let content = <h1>Welcome to the Movie App!</h1>;

    if (props.movies) {
        if (!props.movies.length) {
            content = <h1>-- No results found --</h1>;
        } else {
            const movies = props.movies.map(movie => <Movie key={movie.id} info={movie} />);

            content = (
                <React.Fragment>
                    {movies}

                    <Pagination
                        search={props.search}
                        currentPage={props.currentPage}
                        totalPages={props.totalPages}
                        clicked={props.getMovies} />
                </React.Fragment>
            );
        }
    }

    return (
        <React.Fragment>
            <Toolbar
                search={props.search}
                changed={props.changed}
                isLoading={props.isLoading}
                clicked={() => {
                    if (props.search === '') return;
                    props.getMovies(props.search);
                }} />
            
            <div className="Movies">
                {content}
            </div>
        </React.Fragment>
    );
};

Movies.propTypes = {
    movies: PropTypes.array,
    search: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number,
    getMovies: PropTypes.func.isRequired,
    changed: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default withRouter(Movies);