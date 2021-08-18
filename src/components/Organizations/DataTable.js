import React, {useState} from 'react';
import Pagination from "../Pagination";

export const DataTable = ({data}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(3);

    //table pagination
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    //change table pages
    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    return (
        <>
            <table>
                <tbody>
                {currentPosts.map((el, index) => {
                        return <tr key={index}>
                            <td className={'row__name'}>
                                <h2>{el.name}</h2>
                                <i>{el.description}</i>
                            </td>
                            <td className={'row__text'}>{el.stuff}</td>
                        </tr>
                    }
                )}
                </tbody>
            </table>
            {data.length > postPerPage &&
            <Pagination postPerPage={postPerPage} posts={data.length} changePage={changePage}/>}
        </>
    );
};