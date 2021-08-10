import React, {useState} from 'react';
import {ImgGiveaway} from "../../components/Img/Img";
import {LinkStyled} from "../../components/Link/Link.styles";
import {ButtonStyled} from "../../components/Button/Button.styles";
import {Link} from "react-scroll";
import decoration from "../../assets/Decoration.svg";
import Footer from "../../components/Footer/Footer";
import GiveawayFormPage3 from "./GiveawayForm_page3";
import GiveawayFormPage4 from "./GiveawayForm_page4";
import GiveawayForm_thank_you from "./GiveawayForm_thank_you";
import GiveawayFormPage1 from "./GiveawayForm_page1";
import GiveawayFormPage2 from "./GiveawayForm_page2";
import GiveawayFormSummary from "./GiveawayForm_summary";
import {db} from "../../firebase";
import {Theme} from "../../Utils/Theme";

export const GiveawayContext = React.createContext({});

const GiveawayForm = () => {
    const [data, setData] = useState({
        type:'',
        bags:'',
        localization:'',
        helpGroup:'',
        helpGroupOption:'',
        color: (Theme.colors.firstSectionColor),
    });

    const [address, setAddress] = useState({
        street:'',
        city:'',
        postCode:'',
        phone:'',
        date:'',
        hour:'',
        comment:''
    });

    const [firstPage, setFirstPage] = useState(true);
    const [secondPage, setSecondPage] = useState(false);
    const [thirdPage, setThirdPage] = useState(false);
    const [fourthPage, setFourthPage] = useState(false);
    const [summaryPage, setSummaryPage] = useState(false);
    const [thankyouPage, setThankyouPage] = useState(false);

    const handleCheck = (e) => {
        const name = e.target.name;
        setData({...data, [name]: e.target.value})
    };

    const handleInput = (e) => {
        const name = e.target.name;
        setAddress({...address, [name]: e.target.value})
    };

    //add data to firestore from state
    const addNewGiveawayData = () => {
        db.collection('giveaway')
            .add({
                type: data.type,
                bags: data.bags,
                localization: data.localization,
                helpGroup: data.helpGroup,
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

    //submit giveaway form and send data to firestore
    const handleSubmit = () => {
        addNewGiveawayData();
        setSummaryPage(false);
        setThankyouPage(true);
        const tempData = {
            type:'',
            bags:'',
            localization:'',
            helpGroup:'',
            helpGroupOption:''
        };
        setData(tempData);
        const tempAddress = {
            street:'',
            city:'',
            postCode:'',
            phone:'',
            date:'',
            hour:'',
            comment:''
        };
        setAddress(tempAddress)
    };

    return (
        <GiveawayContext.Provider value={{...data, ...address, handleCheck, handleInput,
            handleSubmit}}>
            <div>
                <div className={'giveaway__field'}>
                    <ImgGiveaway />
                    <div className={'giveaway__nav_field'}>
                        <nav>
                            <div className={'nav__field'}>
                                <LinkStyled to={'/giveaway'}>
                                    <ButtonStyled className={'sign_in'} style={{width:'6rem'}}>
                                        Oddaj rzeczy
                                    </ButtonStyled>
                                </LinkStyled>
                                <LinkStyled style={{fontWeight: 300}} to={'/wyloguj'}>
                                    <p className={'sign_in'} style={{marginRight:'.6875rem'}}>Wyloguj</p>
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
                {firstPage && <GiveawayFormPage1 setFirstPage={setFirstPage}
                setSecondPage={setSecondPage}/>}

                {secondPage && <GiveawayFormPage2 setFirstPage={setFirstPage} setSecondPage={setSecondPage}
                                                  setThirdPage={setThirdPage} />}

                {thirdPage && <GiveawayFormPage3 setSecondPage={setSecondPage} setThirdPage={setThirdPage}
                setFourthPage={setFourthPage}/>}

                {fourthPage && <GiveawayFormPage4 setThirdPage={setThirdPage} setFourthPage={setFourthPage}
                                                  setSummaryPage={setSummaryPage}/>}

                {summaryPage && <GiveawayFormSummary setFourthPage={setFourthPage} setSummaryPage={setSummaryPage}/>}

                {thankyouPage && <GiveawayForm_thank_you />}
                <Footer />
            </div>
        </GiveawayContext.Provider>
    );
};

export default GiveawayForm;