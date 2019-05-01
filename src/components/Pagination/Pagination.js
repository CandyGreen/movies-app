import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';

const Pagination = ({ search, currentPage, totalPages, clicked }) => {
    let pagination = null, firstPage = null, previousPage = null, nextPage = null, lastPage = null;

    if (currentPage > 2) {
        firstPage = <span onClick={() => clicked(search, 1)}>1</span>;
    }

    if (currentPage > 1) {
        previousPage = <span onClick={() => clicked(search, currentPage - 1)}>{ currentPage - 1 }</span>;
    }

    if (currentPage + 1 < totalPages) {
        nextPage = <span onClick={() => clicked(search, currentPage + 1)}>{ currentPage + 1 }</span>;
    }

    if (currentPage !== totalPages) {
        lastPage = <span onClick={() => clicked(search, totalPages)}>{ totalPages }</span>;
    }

    if (totalPages) {
        pagination = (
            <div className="Pagination">
                {firstPage}
                {previousPage}
                <span className="Selected">{ currentPage }</span>
                {nextPage}
                {lastPage}
            </div>
        );
    }

    return pagination;
};

Pagination.propTypes = {
    search: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number,
    clicked: PropTypes.func.isRequired
};

export default Pagination;