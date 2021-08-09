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

const GiveawayForm = () => {
    const [type, setType] = useState('');
    const [bags, setBags] = useState('');
    const [localization, setLocalization] = useState('');
    const [helpGroup, setHelpGroup] = useState('');
    const [helpGroupOption, setHelpGroupOption]=useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [postCode, setPostCode] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [comment, setComment] = useState('');

    const [firstPage, setFirstPage] = useState(true);
    const [secondPage, setSecondPage] = useState(false);
    const [thirdPage, setThirdPage] = useState(false);
    const [fourthPage, setFourthPage] = useState(false);
    const [summaryPage, setSummaryPage] = useState(false);
    const [thankyouPage, setThankyouPage] = useState(false);

    const props = [type, bags, localization, helpGroup, helpGroupOption, street, city, postCode, phone, date, hour, comment];

    const handleCheckType = (e) => {
        setType(e.target.value)
    };

    const handleBagsNumber = (e) => {
        setBags(e.target.value)
    };

    const handleLocalization = (e) => {
        setLocalization(e.target.value)
    };

    const handleHelpGroup = (e) => {
        setHelpGroup(e.target.value)
    };

    const handleHelpGroupOption = (e) => {
        const tempHelpGroup = e.target.value;
        setHelpGroupOption(tempHelpGroup)
    };

    const handleStreet = (e) => {
        const tempStreet = e.target.value;
        setStreet(tempStreet)
    };

    const handleCity = (e) => {
        const tempCity = e.target.value;
        setCity(tempCity)
    };

    const handlePostCode = (e) => {
        const tempPostCode = e.target.value;
        setPostCode(tempPostCode)
    };

    const handlePhone = (e) => {
        const tempPhone = e.target.value;
        setPhone(tempPhone)
    };

    const handleDate = (e) => {
        const tempDate = e.target.value;
        setDate(tempDate)
    };

    const handleHour = (e) => {
        const tempHour = e.target.value;
        setHour(tempHour)
    };

    const handleComment = (e) => {
        const tempComment = e.target.value;
        setComment(tempComment)
    };

    const functions = [handleStreet, handleCity, handlePhone, handlePostCode, handleDate, handleComment,
    handleHour];

    //add data to firestore from state
    const addNewGiveawayData = () => {
        db.collection('giveaway')
            .add({
                type: type,
                bags: bags,
                localization: localization,
                helpGroup: helpGroup,
                organization: helpGroupOption,
                street: street,
                city: city,
                postCode: postCode,
                phone: phone,
                date: date,
                hour: hour,
                comment: comment
            })
            .then(r => console.log(r))
            .catch(err => console.log(err))
    };

    //submit giveaway form and send data to firestore
    const handleSubmit = () => {
        addNewGiveawayData();
        setSummaryPage(false);
        setThankyouPage(true);
        setType('');
        setBags('');
        setLocalization('');
        setHelpGroup('');
        setHelpGroupOption('');
        setStreet('');
        setCity('');
        setPostCode('');
        setPhone('');
        setDate('');
        setHour('');
        setComment('');
    };

    return (
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
            {firstPage && <GiveawayFormPage1 handleCheckType={handleCheckType} setFirstPage={setFirstPage}
            setSecondPage={setSecondPage}/>}

            {secondPage && <GiveawayFormPage2 handleBagsNumber={handleBagsNumber} bags={bags} setFirstPage={setFirstPage}
                                              setSecondPage={setSecondPage} setThirdPage={setThirdPage} />}

            {thirdPage && <GiveawayFormPage3 handleLocalization={handleLocalization} localization={localization}
            handleHelpGroup={handleHelpGroup} helpGroup={helpGroup} option={helpGroupOption}
            handleOption={handleHelpGroupOption} setSecondPage={setSecondPage} setThirdPage={setThirdPage}
            setFourthPage={setFourthPage}/>}

            {fourthPage && <GiveawayFormPage4 functions={functions} props={props} setThirdPage={setThirdPage}
                                              setFourthPage={setFourthPage} setSummaryPage={setSummaryPage}/>}

            {summaryPage && <GiveawayFormSummary props={props} handleSubmit={handleSubmit} setFourthPage={setFourthPage}
                                                 setSummaryPage={setSummaryPage} setThankyouPage={setThankyouPage}/>}

            {thankyouPage && <GiveawayForm_thank_you />}
            <Footer />
        </div>
    );
};

export default GiveawayForm;