import React from 'react';
import {LinkStyled} from "../../components/Link/Link.styles";
import {ButtonStyled, FooterButtonStyled} from "../../components/Button/Button.styles";
import {Link} from "react-scroll";
import decoration from "../../assets/Decoration.svg";
import SignUpForm from "./SignUp_Form";

const SignUp = () => {
    return (
        <div>
            <nav className={'nav__signIn'}>
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
                        <Link smooth='true' to='instruction'><li>O co chodzi?</li></Link>
                        <Link smooth='true' to='aboutUs'><li>O nas</li></Link>
                        <Link smooth='true' to='organizations'><li>Fundacja i organizacje</li></Link>
                        <Link smooth='true' to='contact'><li>Kontakt</li></Link>
                    </ul>
                </div>
            </nav>
            <div className={'signIn__field'}>
                <h2>Zaloguj się</h2>
                <img src={decoration} />
                <SignUpForm />
            </div>
        </div>
    );
};

export default SignUp;