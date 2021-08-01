import React from 'react';
import {Link} from "react-router-dom";
import {HeaderButton, SignInButton} from "./Button.styles";
import {Theme} from "../Utils/Theme";
import '../scss/main.scss'

const HomeHeader = () => {
    return (
        <div>
            <img src='../assets/Home-Hero-Image.jpg' />
            <div>
                <nav>
                    <div className={'nav__field'}>
                        <Link style={{textDecoration: 'none',
                            color: `${Theme.colors.darkColor}`,
                            fontWeight: 300
                        }}>
                            <p className={'sign_in'}>Zaloguj</p>
                        </Link>
                        <Link>
                            <SignInButton className={'sign_in'}>
                                Załóż Konto
                            </SignInButton>
                        </Link>
                    </div>
                    <div>
                        <ul className={'header__list'}>
                            <li>Start</li>
                            <li>O co chodzi?</li>
                            <li>O nas</li>
                            <li>Fundacja i organizacje</li>
                            <li>Kontakt</li>
                        </ul>
                    </div>
                </nav>
                <div className={'header__field'}>
                    <h1>Zacznij pomagać!<br />
                        Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src='../assets/Decoration.svg' />
                    <div>
                        <Link><HeaderButton className={'button'}>Oddaj <br/>rzeczy</HeaderButton></Link>
                        <Link><HeaderButton className={'button'}>Zorganizuj <br/>zbiórkę</HeaderButton></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;