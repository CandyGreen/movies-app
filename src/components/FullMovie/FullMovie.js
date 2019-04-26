import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import './FullMovie.scss';

const FullMovie = props => {
    if (!props.movies) return <Redirect to="/" />;

    const movieInfo = props.movies.find(movie => movie.id === +props.match.params.id);
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

export default withRouter(FullMovie);