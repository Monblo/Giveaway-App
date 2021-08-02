import React from 'react';
import {HeaderButton, SignInButton} from "./Button/Button.styles";
import {Theme} from "../Utils/Theme";
import '../scss/main.scss'
import decoration from '../assets/Decoration.svg'
import ImgHeader from "./ImgHeader/ImgHeader";
import {LinkStyled} from "./Link/Link.styles";

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
                            <SignInButton className={'sign_in'}>
                                Załóż Konto
                            </SignInButton>
                        </LinkStyled>
                    </div>
                    <div>
                        <ul className={'header__list'}>
                            <LinkStyled smooth to='/'><li>Start</li></LinkStyled>
                            <LinkStyled smooth to='/section1'><li>O co chodzi?</li></LinkStyled>
                            <LinkStyled smooth to={'aboutUs'}><li>O nas</li></LinkStyled>
                            <LinkStyled smooth to='/section2'><li>Fundacja i organizacje</li></LinkStyled>
                            <LinkStyled smooth to={'contact'}><li>Kontakt</li></LinkStyled>
                        </ul>
                    </div>
                </nav>
                <div className={'header__banner_field'}>
                    <h1>Zacznij pomagać!<br />
                        Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={decoration} />
                    <div>
                        <LinkStyled to={'/logowanie'}><HeaderButton className={'button'}>Oddaj <br/>rzeczy</HeaderButton></LinkStyled>
                        <LinkStyled to={'/logowanie'}><HeaderButton className={'button'}>Zorganizuj <br/>zbiórkę</HeaderButton></LinkStyled>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;