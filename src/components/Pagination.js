import React from 'react';

const Pagination = ({postPerPage, posts, changePage}) => {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(posts / postPerPage); i++) {
        pageNumbers = [...pageNumbers, i]
    }

    return (
        <div>
            <ul className={'page__number'}>
                {pageNumbers.map(number => <li key={number} tabIndex='0' onClick={() => changePage(number)}>
                    {number}
                </li>)}
            </ul>
        </div>
    );
};

export default Pagination;