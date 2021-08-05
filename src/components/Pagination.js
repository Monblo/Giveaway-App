import React, {useState} from 'react';

const Pagination = ({postPerPage, posts, changePage}) => {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(posts/postPerPage); i++){
        pageNumbers = [...pageNumbers, i]
    }

    return (
        <div>
            <ul className={'page__number'}>
                {pageNumbers.map(number => <li key={number} onClick={() => changePage(number)}>
                    {number}
                </li>)}
            </ul>
        </div>
    );
};

export default Pagination;