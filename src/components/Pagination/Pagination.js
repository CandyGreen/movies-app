import React from 'react';

import './Pagination.scss';

const Pagination = props => {
    let pagination = null, goBack = null, nextPage = null, lastPage;

    if (props.currentPage > 1) {
        goBack = (
            <span
                onClick={() => props.clicked(props.search, props.currentPage - 1)}>
                { props.currentPage - 1 }
            </span>
        );
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
                { props.currentPage > 2 ? <span onClick={() => props.clicked(props.search, 1)}>1</span> : null }
                {goBack}
                <span className="Selected" onClick={() => props.clicked(props.search, props.currentPage)}>{ props.currentPage }</span>
                {nextPage}
                {lastPage}
            </div>
        );
    }

    return pagination;
};

export default Pagination;