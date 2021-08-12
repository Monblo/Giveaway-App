import React, {useContext} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import icon1 from '../../assets/Icon-1.svg';
import icon4 from "../../assets/Icon-4.svg";
import {GiveawayContext} from "./GiveawayForm";
import {LinkStyled} from "../../components/Link/Link.styles";

const GiveawayFormSummary = () => {
    const context = useContext(GiveawayContext);
    const {type, bags, localization, group1, group2, group3, group4, group5, helpGroupOption, street, city, postCode, phone, date,
        hour, comment, handleSubmit} = context;

    return (
            <div className={'giveaway__form'}>
                <h2>Podsumowanie Twojej darowizny</h2>
                <h3>Oddajesz:</h3>
                <div className={'summary__icon'}>
                    <img src={icon1}/>
                    <p>{bags} worki, {type}, {group1} {group2} {group3} {group4} {group5}</p>
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
                    <LinkStyled to={'/giveaway/4'}>
                    <FooterButtonStyled style={{backgroundColor:'transparent',
                        position:'absolute',
                        bottom:'7rem'}}>Wstecz</FooterButtonStyled>
                    </LinkStyled>
                    <LinkStyled to={'/giveaway/thankyou'}>
                    <FooterButtonStyled style={{backgroundColor:'transparent',
                        position:'absolute',
                        bottom:'7rem',
                        left: '12rem'}} onClick={handleSubmit}>Potwierdzam</FooterButtonStyled>
                    </LinkStyled>
                </div>
            </div>
    );
};

export default GiveawayFormSummary;