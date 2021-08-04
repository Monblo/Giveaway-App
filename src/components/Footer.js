import React from 'react';
import DecorationImg from "./DecorationImg/DecorationImg";
import {LinkStyled} from "./Link/Link.styles";
import {FooterButtonStyled} from "./Button/Button.styles";
import instagram from '../assets/Instagram.svg';
import facebook from '../assets/Facebook.svg';

const Footer = () => {
    return (
        <div className={'footer'} name='contact'>
            <div className={'footer__field'}>
                <div className={'form'}>
                    <h2>Skontaktuj się z nami</h2>
                    <DecorationImg />
                    <form type='submit'>
                        <div className={'form__info'}>
                            <div className={'input__name'}>
                                <label>Wpisz swoje imię</label>
                                <input type='text' name='name' placeholder='Monika'/>
                            </div>
                            <div>
                                <label>Wpisz swój email</label>
                                <input type='text' name='email' placeholder='abc@xyz.pl'/>
                            </div>
                        </div>
                        <label>Wpisz swoją wiadomość</label>
                        <input type='text' name='text'
                               placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'/>
                    {/*<LinkStyled to='/logowanie'>*/}
                        <FooterButtonStyled className={'form__button'}>Wyślij</FooterButtonStyled>
                    {/*</LinkStyled>*/}
                    </form>
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