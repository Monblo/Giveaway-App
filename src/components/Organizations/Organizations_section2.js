import React from 'react';

const OrganizationsSection2 = ({organizations}) => {
    return (
        <table>
            <tbody>
            {organizations.map(el => {return <tr key={el.id}><td className={'row__name'}>
                    <h2>{el.name}</h2>
                    <i>{el.description}</i>
                </td>
                    <td className={'row__text'}>{el.stuff}</td>
                </tr>}
            )}
            </tbody>
        </table>
    );
};

export default OrganizationsSection2;