import React from 'react';

import './Pagination.scss';

const Pagination = props => {
    let pagination = null, firstPage = null, previousPage = null, nextPage = null, lastPage = null;

    if (props.currentPage > 2) {
        firstPage = <span onClick={() => props.clicked(props.search, 1)}>1</span>;
    }

    if (props.currentPage > 1) {
        previousPage = <span onClick={() => props.clicked(props.search, props.currentPage - 1)}>{ props.currentPage - 1 }</span>;
    }

    if (props.currentPage + 1 < props.totalPages) {
        nextPage = <span onClick={() => props.clicked(props.search, props.currentPage + 1)}>{ props.currentPage + 1 }</span>;
    }

    if (props.currentPage !== props.totalPages) {
        lastPage = <span onClick={() => props.clicked(props.search, props.totalPages)}>{ props.totalPages }</span>;
    }

    if (props.totalPages) {
        pagination = (
            <div className="Pagination">
                {firstPage}
                {previousPage}
                <span className="Selected">{ props.currentPage }</span>
                {nextPage}
                {lastPage}
            </div>
        );
    }

    return pagination;
};

export default Pagination;