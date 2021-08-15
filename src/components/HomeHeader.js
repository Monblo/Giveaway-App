import React, {useContext} from 'react';
import {ButtonStyled, HeaderButton} from "./Button/Button.styles";
import '../scss/main.scss'
import decoration from '../assets/Decoration.svg'
import {ImgHeader} from "./Img/Img";
import {LinkStyled} from "./Link/Link.styles";
import {ButtonGiveAway} from "./Button/Button";
import {Link} from "react-scroll";
import {AuthContext} from "../authContext";
import {auth} from "../firebase";
import {useHistory} from "react-router-dom";

const HomeHeader = () => {
    const {loggedIn, setLoggedIn, currentUserEmail} = useContext(AuthContext);
    const history = useHistory();

    const handleLogOut = async () => {
        try {
            await auth.signOut()
            history.push('/wyloguj')
            setLoggedIn(false)
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className={'header__field'}>
            <ImgHeader/>
            <div className={'header__nav_field'}>
                <nav>
                    <div className={'nav__field'}>
                        {loggedIn ? (<>
                            <p className={'sign_in'}>Cześć {currentUserEmail}</p>
                            <LinkStyled to={'/giveaway'}>
                                <ButtonStyled className={'sign_in'} style={{width: '6rem'}}>
                                    Oddaj rzeczy
                                </ButtonStyled>
                            </LinkStyled>
                            <ButtonStyled className={'sign_in'} style={{
                                marginRight: '.6875rem',
                                border: 'none'
                            }} onClick={handleLogOut}>Wyloguj</ButtonStyled>
                        </>) : (
                            <><LinkStyled style={{fontWeight: 300}} to={'/logowanie'}>
                                <p className={'sign_in'}>Zaloguj</p>
                            </LinkStyled>
                                <LinkStyled to={'/rejestracja'}>
                                    <ButtonStyled className={'sign_in'}>
                                        Załóż Konto
                                    </ButtonStyled>
                                </LinkStyled></>)}
                    </div>
                    <div>
                        <ul className={'header__list'}>
                            <LinkStyled smooth='true' to='/'>
                                <li>Start</li>
                            </LinkStyled>
                            <Link smooth='true' to='instruction'>
                                <li>O co chodzi?</li>
                            </Link>
                            <Link smooth='true' to='aboutUs'>
                                <li>O nas</li>
                            </Link>
                            <Link smooth='true' to='organizations'>
                                <li>Fundacja i organizacje</li>
                            </Link>
                            <Link smooth='true' to='contact'>
                                <li>Kontakt</li>
                            </Link>
                        </ul>
                    </div>
                </nav>
                <div className={'header__banner_field'}>
                    <h2>Zacznij pomagać!<br/>
                        Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img src={decoration}/>
                    <div>
                        <LinkStyled to={loggedIn ? '/giveaway' : '/logowanie'}><ButtonGiveAway/></LinkStyled>
                        <LinkStyled to={'/logowanie'}><HeaderButton
                            className={'button'}>Zorganizuj <br/>zbiórkę</HeaderButton></LinkStyled>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;