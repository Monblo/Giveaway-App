import React, {useContext, useState} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import icon1 from '../../assets/Icon-1.svg';
import icon4 from "../../assets/Icon-4.svg";
import {GiveawayContext} from "./GiveawayForm";
import {Redirect} from "react-router-dom";

const GiveawayFormSummary = () => {
    const context = useContext(GiveawayContext);
    const {
        type,
        bags,
        localization,
        help1,
        help2,
        help3,
        help4,
        help5,
        helpGroupOption,
        street,
        city,
        postCode,
        phone,
        date,
        hour,
        comment,
        setData,
        setAddress,
        addNewGiveawayData,
    } = context;
    const [page, setPage] = useState({
        prev: false,
        next: false
    });

    const handlePrev = () => {
        setPage({prev: true})
    };

    //submit giveaway form and send data to firestore & clear state
    const handleSend = () => {
        addNewGiveawayData();
        const tempData = {
            type: '',
            bags: '',
            localization: '',
            helpGroup1: '',
            helpGroup2: '',
            helpGroup3: '',
            helpGroup4: '',
            helpGroup5: '',
            helpGroupOption: ''
        };
        setData(tempData);
        const tempAddress = {
            street: '',
            city: '',
            postCode: '',
            phone: '',
            date: '',
            hour: '',
            comment: ''
        };
        setAddress(tempAddress);
    };

    return (
        <div className={'giveaway__form'}>
            <h2>Podsumowanie Twojej darowizny</h2>
            <h3>Oddajesz:</h3>
            <div className={'summary__icon'}>
                <img src={icon1}/>
                <p>{bags} worki, {type}, {help1} {help2} {help3} {help4} {help5}</p>
            </div>
            <div className={'summary__icon'}>
                <img src={icon4}/>
                <p>dla lokalizacji: {localization} {helpGroupOption}</p>
            </div>
            <div className={'input__data'}>
                <div className={'input__address'}>
                    <h3>Adres odbioru:</h3>
                    <div className={'input__address__element'}>
                        <label>Ulica</label>
                        <p>{street}</p>
                    </div>
                    <div className={'input__address__element'}>
                        <label>Miasto</label>
                        <p>{city}</p>
                    </div>
                    <div className={'input__address__element'}>
                        <label>Kod pocztowy</label>
                        <p>{postCode}</p>
                    </div>
                    <div className={'input__address__element'}>
                        <label>Numer telefonu</label>
                        <p>{phone}</p>
                    </div>
                </div>
                <div className={'input__address'}>
                    <h3>Termin odbioru:</h3>
                    <div className={'input__address__element'}>
                        <label>Data</label>
                        <p>{date}</p>
                    </div>
                    <div className={'input__address__element'}>
                        <label>Godzina</label>
                        <p>{hour}</p>
                    </div>
                    <div className={'input__address__element '}>
                        <label className={'label__supplier'}>Uwagi <br/>dla kuriera</label>
                        <p>{comment}</p>
                    </div>
                </div>
            </div>
            <div>
                <FooterButtonStyled style={{
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    bottom: '7rem'
                }} onClick={handlePrev}>
                    {page.prev && <Redirect to={'/giveaway/4'}/>}
                    Wstecz</FooterButtonStyled>
                <FooterButtonStyled style={{
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    bottom: '7rem',
                    left: '12rem'
                }} onClick={handleSend}>
                    {page.next && <Redirect to={'/giveaway/thankyou'}/>}
                    Potwierdzam</FooterButtonStyled>
            </div>
        </div>
    );
};

export default GiveawayFormSummary;