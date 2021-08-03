import React from 'react';
import DecorationImg from "../DecorationImg/DecorationImg";
import {OrganizationsButton} from "../Button/Button.styles";
import Organizations_section3 from "./Organizations_section3";

const Organizations = () => {
    return (
        <div className={'organizations'}>
            <h2>Komu pomagamy?</h2>
            <DecorationImg />
            <div className={'organizations__buttons'}>
                <OrganizationsButton>Fundacjom</OrganizationsButton>
                <OrganizationsButton>Organizacjom Pozarządowym</OrganizationsButton>
                <OrganizationsButton>Lokalnym Zbiórkom</OrganizationsButton>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <Organizations_section3 />
        </div>
    );
};

export default Organizations;