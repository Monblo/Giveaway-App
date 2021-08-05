import React from 'react';
import DecorationImg from "../DecorationImg/DecorationImg";
import instagram from '../../assets/Instagram.svg';
import facebook from '../../assets/Facebook.svg';
import Form from "./Form";

const Footer = () => {
    return (
        <div className={'footer'} name='contact'>
            <div className={'footer__field'}>
                <div className={'form'}>
                    <h2>Skontaktuj się z nami</h2>
                    <DecorationImg />
                    <Form />
                </div>
            </div>
            <div className={'footer__icons'}>
                <p>Copyright by Coders Lab</p>
                <div>
                    <img src={facebook} />
                    <img src={instagram} />
                </div>
            </div>
        </div>
    );
};

export default Footer;