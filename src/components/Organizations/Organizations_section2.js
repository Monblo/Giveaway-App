import React, {useState} from 'react';
import Pagination from "../Pagination";

const OrganizationsSection2 = ({organizations}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage,setPostPerPage] = useState(3);

    //table pagination
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = organizations.slice(indexOfFirstPost, indexOfLastPost);

    //change table pages
    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    return (
        <table>
            <tbody>
            {currentPosts.map(el => {return <tr key={el.id}><td className={'row__name'}>
                    <h2>{el.name}</h2>
                    <i>{el.description}</i>
                </td>
                    <td className={'row__text'}>{el.stuff}</td>
                </tr>}
            )}
            </tbody>
            <Pagination postPerPage={postPerPage} posts={organizations.length} changePage={changePage}/>
        </table>
    );
};

export default OrganizationsSection2;