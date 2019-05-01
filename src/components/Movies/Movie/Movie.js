import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Movie.scss';

const Movie = ({ info }) => {
    const { id, title, poster, overview } = info;
    const imageSrc = poster
        ? `https://image.tmdb.org/t/p/w500/${poster}`
        : 'http://www.newscrane.com/wp-content/uploads/2018/01/Newscrane-movie-feature3.jpg';

    return (
        <div className="Movie">
            <div className="Poster">
                <img src={imageSrc} alt={title} />
            </div>

            <div className="Description">
                <div className="Info">
                    <h2>{title}</h2>
                    <p>{overview}</p>
                </div>

                <div className="Link">
                    <Link to={'/' + id}>More Info</Link>
                </div>
            </div>
        </div>
    );
};

Movie.propTypes = {
    info: PropTypes.object.isRequired
};

export default Movie;
