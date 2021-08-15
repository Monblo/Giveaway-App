import React, {useState, useContext} from 'react';
import {ImgGiveaway} from "../../components/Img/Img";
import {LinkStyled} from "../../components/Link/Link.styles";
import {ButtonStyled} from "../../components/Button/Button.styles";
import {Link} from "react-scroll";
import decoration from "../../assets/Decoration.svg";
import Footer from "../../components/Footer/Footer";
import GiveawayFormPage3 from "./GiveawayForm_page3";
import GiveawayFormPage4 from "./GiveawayForm_page4";
import GiveawayFormPage1 from "./GiveawayForm_page1";
import GiveawayFormPage2 from "./GiveawayForm_page2";
import GiveawayFormSummary from "./GiveawayForm_summary";
import {auth, db} from "../../firebase";
import {Route, Switch, useHistory} from "react-router-dom";
import GiveawayFormThankYou from "./GiveawayForm_thank_you";
import {AuthContext} from "../../authContext";

export const GiveawayContext = React.createContext({});

const GiveawayForm = () => {
    const {setLoggedIn, currentUserEmail} = useContext(AuthContext);
    const [data, setData] = useState({
        type: '',
        bags: '',
        localization: '',
        helpGroupOption: '',
        help1: '',
        help2: '',
        help3: '',
        help4: '',
        help5: ''
    });
    const [address, setAddress] = useState({
        street: '',
        city: '',
        postCode: '',
        phone: '',
        date: '',
        hour: '',
        comment: ''
    });
    const [colors, setColors] = useState({
        type1: 'transparent',
        type2: 'transparent',
        type3: 'transparent',
        type4: 'transparent',
        type5: 'transparent'
    });
    const history = useHistory();

    const handleCheck = (e) => {
        const name = e.target.name;
        setData(prev => {
            return {...prev, [name]: e.target.value}
        })
    };

    const handleInput = (e) => {
        const name = e.target.name;
        setAddress(prev => {
            return {...prev, [name]: e.target.value}
        })
    };

    const handleNext = (path) => {
        history.push(path)
    };

    const handlePrev = (path) => {
        history.push(path)
    };

    //add data to firestore from state
    const addNewGiveawayData = () => {
        db.collection('giveaway')
            .add({
                type: data.type,
                bags: data.bags,
                localization: data.localization,
                helpGroup1: data.help1,
                helpGroup2: data.help2,
                helpGroup3: data.help3,
                helpGroup4: data.help4,
                helpGroup5: data.help5,
                organization: data.helpGroupOption,
                street: address.street,
                city: address.city,
                postCode: address.postCode,
                phone: address.phone,
                date: address.date,
                hour: address.hour,
                comment: address.comment
            })
            .then(r => console.log(r))
            .catch(err => console.log(err))
    };

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
        <GiveawayContext.Provider value={{
            ...data, ...address, ...colors, data, setData, setAddress, setColors,
            handleCheck, handleInput, addNewGiveawayData, handleNext, handlePrev
        }}>
            <div>
                <div className={'giveaway__field'}>
                    <ImgGiveaway/>
                    <div className={'giveaway__nav_field'}>
                        <nav>
                            <div className={'nav__field'}>
                                <p className={'sign_in'}>Cześć {currentUserEmail} </p>
                                <LinkStyled to={'/giveaway'}>
                                    <ButtonStyled className={'sign_in'} style={{width: '6rem'}}>
                                        Oddaj rzeczy
                                    </ButtonStyled>
                                </LinkStyled>
                                <LinkStyled style={{fontWeight: 300}} to={'/wyloguj'}>
                                    <ButtonStyled className={'sign_in'} style={{
                                        marginRight: '.6875rem',
                                        border: 'none'
                                    }} onClick={handleLogOut}>Wyloguj</ButtonStyled>
                                </LinkStyled>
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
                            <h2>Oddaj rzeczy, których już nie chcesz<br/>
                                POTRZEBUJĄCYM</h2>
                            <img src={decoration}/>
                            <h3 style={{fontWeight: '300'}}>Wystarczą 4 proste kroki:</h3>
                            <div className={'giveaway__instruction'}>
                                <div className={'giveaway__instruction__field'}>
                                    <h3>1</h3>
                                    <p>Wybierz rzeczy</p>
                                </div>
                                <div className={'giveaway__instruction__field'}>
                                    <h3>2</h3>
                                    <p>Spakuj je w worki</p>
                                </div>
                                <div className={'giveaway__instruction__field'}>
                                    <h3>3</h3>
                                    <p>Wybierz fundację</p>
                                </div>
                                <div className={'giveaway__instruction__field'}>
                                    <h3>4</h3>
                                    <p>Zamów kuriera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route exact path='/giveaway' component={GiveawayFormPage1}/>
                    <Route path='/giveaway/2' component={GiveawayFormPage2}/>
                    <Route path='/giveaway/3' component={GiveawayFormPage3}/>
                    <Route path='/giveaway/4' component={GiveawayFormPage4}/>
                    <Route path='/giveaway/summary' component={GiveawayFormSummary}/>
                    <Route path='/giveaway/thankyou' component={GiveawayFormThankYou}/>
                </Switch>
                <Footer/>
            </div>
        </GiveawayContext.Provider>
    );
};

export default GiveawayForm;