import React, {useState} from 'react';
import Pagination from "../Pagination";

const OrganizationsSection3 = ({locals}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(3);

    //table pagination
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = locals.slice(indexOfFirstPost, indexOfLastPost);

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
            {locals.length > postPerPage &&
            <Pagination postPerPage={postPerPage} posts={locals.length} changePage={changePage}/>}
        </>
    );
};

export default OrganizationsSection3;