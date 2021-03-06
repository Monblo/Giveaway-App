import React, {useContext, useState} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import icon1 from '../../assets/Icon-1.svg';
import icon4 from "../../assets/Icon-4.svg";
import {GiveawayContext} from "./GiveawayForm";

const GiveawayFormSummary = () => {
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
        setColors,
        addNewGiveawayData,
        handleNext,
        handlePrev
    } = useContext(GiveawayContext);

    //submit giveaway form and send data to firestore & clear state
    const handleSend = () => {
        addNewGiveawayData();
        const dataTmp = {
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
        setData(dataTmp);
        const addressTmp = {
            street: '',
            city: '',
            postCode: '',
            phone: '',
            date: '',
            hour: '',
            comment: ''
        };
        setAddress(addressTmp);
        const colorsTmp = {
            typeColor: {
                type1: 'transparent',
                type2: 'transparent',
                type3: 'transparent',
                type4: 'transparent',
                type5: 'transparent'
            },
            group1: 'transparent',
            group2: 'transparent',
            group3: 'transparent',
            group4: 'transparent',
            group5: 'transparent'
        };
        setColors(colorsTmp);
        handleNext('/giveaway/thankyou')
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
                }} onClick={() => handlePrev('/giveaway/4')}>
                    Wstecz</FooterButtonStyled>
                <FooterButtonStyled style={{
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    bottom: '7rem',
                    left: '12rem'
                }} onClick={handleSend}>
                    Potwierdzam</FooterButtonStyled>
            </div>
        </div>
    );
};

export default GiveawayFormSummary;