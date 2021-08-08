import React from 'react';
import GiveawayForm_page1 from "./GiveawayForm_page1";
import {ImgGiveaway} from "../../components/Img/Img";
import {LinkStyled} from "../../components/Link/Link.styles";
import {ButtonStyled} from "../../components/Button/Button.styles";
import {Link} from "react-scroll";
import decoration from "../../assets/Decoration.svg";
import Footer from "../../components/Footer/Footer";
import GiveawayForm_page2 from "./GiveawayForm_page2";
import GiveawayFormPage3 from "./GiveawayForm_page3";

const GiveawayForm = () => {
    return (
        <div>
            <div className={'giveaway__field'}>
                <ImgGiveaway />
                <div className={'giveaway__nav_field'}>
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
                                <Link smooth='true' to='instruction'><li>O co chodzi?</li></Link>
                                <Link smooth='true' to='aboutUs'><li>O nas</li></Link>
                                <Link smooth='true' to='organizations'><li>Fundacja i organizacje</li></Link>
                                <Link smooth='true' to='contact'><li>Kontakt</li></Link>
                            </ul>
                        </div>
                    </nav>
                    <div className={'header__banner_field'}>
                        <h2>Oddaj rzeczy, których już nie chcesz<br />
                            POTRZEBUJĄCYM</h2>
                        <img src={decoration} />
                        <h3 style={{fontWeight:'300'}}>Wystarczą 4 proste kroki:</h3>
                        <div className={'giveaway__instruction'}>
                            <div className={'giveaway__instruction__field'}>
                                <h3>1</h3>
                                <p>Wybierz rzeczy</p>
                            </div>
                            <div  className={'giveaway__instruction__field'}>
                                <h3>2</h3>
                                <p>Spakuj je w worki</p>
                            </div>
                            <div  className={'giveaway__instruction__field'}>
                                <h3>3</h3>
                                <p>Wybierz fundację</p>
                            </div>
                            <div  className={'giveaway__instruction__field'}>
                                <h3>4</h3>
                                <p>Zamów kuriera</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GiveawayForm_page1 />
            <GiveawayForm_page2 />
            <GiveawayFormPage3 />
            <Footer />
        </div>
    );
};

export default GiveawayForm;