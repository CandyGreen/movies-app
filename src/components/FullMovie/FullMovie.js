import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './FullMovie.scss';

const FullMovie = ({ movies, match }) => {
    if (!movies) return <Redirect to="/" />;

    const movieInfo = movies.find(movie => movie.id === +match.params.id);
    const { title, poster, overview, releaseDate, backdropPath } = movieInfo;

    const imageSrc = poster
        ? `https://image.tmdb.org/t/p/w500/${poster}`
        : 'https://www.gotoburgas.com/uploads/event/6321a276d8e2db62cb91f835335d720f.jpg';

    return (
        <div
            className="FullMovie"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backdropPath})` }}>
            <div className="Poster">
                <img src={imageSrc} alt={title} />
            </div>
            
            <div className="Info">
                <h2>{title}</h2>
                <strong>{releaseDate}</strong>
                <p>{overview}</p>
            </div>
        </div>
    );
};

FullMovie.propTypes = {
    movies: PropTypes.array.isRequired
};

export default withRouter(FullMovie);