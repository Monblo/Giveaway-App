import React from 'react';
import {ButtonStyled, HeaderButton} from "./Button/Button.styles";
import '../scss/main.scss'
import decoration from '../assets/Decoration.svg'
import ImgHeader from "./ImgHeader/ImgHeader";
import {LinkStyled} from "./Link/Link.styles";
import {ButtonGiveAway} from "./Button/Button";

const HomeHeader = () => {
    return (
        <div className={'header__field'}>
            <ImgHeader />
            <div className={'header__nav_field'}>
                <nav>
                    <div className={'nav__field'}>
                        <LinkStyled style={{fontWeight: 300}} to={'/logowanie'}>
                            <p className={'sign_in'}>Zaloguj</p>
                        </LinkStyled>
                        <LinkStyled to={'/rejestracja'}>
                            <ButtonStyled className={'sign_in'}>
                                Załóż Konto
                            </ButtonStyled>
                        </LinkStyled>
                    </div>
                    <div>
                        <ul className={'header__list'}>
                            <LinkStyled smooth='true' to='/'><li>Start</li></LinkStyled>
                            <LinkStyled smooth='true' to='/section1'><li>O co chodzi?</li></LinkStyled>
                            <LinkStyled smooth='true' to='aboutUs'><li>O nas</li></LinkStyled>
                            <LinkStyled smooth='true' to='/section2'><li>Fundacja i organizacje</li></LinkStyled>
                            <LinkStyled smooth='true' to='contact'><li>Kontakt</li></LinkStyled>
                        </ul>
                    </div>
                </nav>
                <div className={'header__banner_field'}>
                    <h2>Zacznij pomagać!<br />
                        Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img src={decoration} />
                    <div>
                        <LinkStyled to={'/logowanie'}><ButtonGiveAway /></LinkStyled>
                        <LinkStyled to={'/logowanie'}><HeaderButton className={'button'}>Zorganizuj <br/>zbiórkę</HeaderButton></LinkStyled>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;