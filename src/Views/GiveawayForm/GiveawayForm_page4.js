import React, {useState, useContext} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import {GiveawayContext} from "./GiveawayForm";
import {LinkStyled} from "../../components/Link/Link.styles";
import {Link} from "react-router-dom";

const GiveawayFormPage4 = () => {

    const context = useContext(GiveawayContext);
    const {street, city, postCode, phone, date, hour, comment, handleInput} = context;
    const [error, setError] = useState({
        streetError: '',
        cityError: '',
        postCodeError: '',
        phoneError: '',
        hourError: '',
        isError: ''
    });

    const handleSubmit = () => {
        const errorsTmp = {
            streetError: null,
            cityError: null,
            postCodeError: null,
            phoneError: null,
            hourError: null,
            isError: null
        }

        if (street.length < 2) {
            errorsTmp.streetError = 'Niepoprawna nazwa ulicy'
        }

        if (city.length < 2) {
            errorsTmp.cityError = 'Niepoprawna nazwa miasta'
        }

        if (/^[0-9]{2}(?:-[0-9]{3})?$/.test(postCode) === false) {
            errorsTmp.postCodeError = 'Niepoprawny kod pocztowy'
        }

        if (phone.length !== 9) {
            errorsTmp.phoneError = 'Niepoprawna nazwa ulicy'
        }

        if (/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(hour) === false) {
            errorsTmp.hourError = 'Niepoprawna godzina'
        }

        if (errorsTmp.streetError !== null || errorsTmp.cityError !== null || error.postCodeError !== null ||
            error.phoneError !== null || error.hourError !== null){
            errorsTmp.isError = false
        }

        setError(errorsTmp);
    };

    const style = {
        color: 'red',
        fontSize: '.8rem',
        fontWeight: '700'
    };

    return (
        <div>
            <div className={'alert__field'}>
                <h2>Ważne!</h2>
                <p>Podaj adres oraz termin odbioru rzeczy.</p>
            </div>
            <div className={'giveaway__form'}>
                <p>Krok 4/4</p>
                <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                <div className={'input__data'}>
                    <div className={'input__address'}>
                        <h3>Adres odbioru:</h3>
                        <div className={'input__address__element'}>
                            <label>Ulica</label>
                            <input type='text' value={street} name='street' onChange={handleInput}/>
                        </div>
                        {error.streetError === null ? '' : <p style={style}>{error.streetError}</p>}
                        <div className={'input__address__element'}>
                            <label>Miasto</label>
                            <input type='text' value={city} name='city' onChange={handleInput}/>
                        </div>
                        {error.cityError === null ? '' : <p style={style}>{error.cityError}</p>}
                        <div className={'input__address__element'}>
                            <label>Kod pocztowy</label>
                            <input type='text' value={postCode} name='postCode' onChange={handleInput}/>
                        </div>
                        {error.postCodeError === null ? '' : <p style={style}>{error.postCodeError}</p>}
                        <div className={'input__address__element'}>
                            <label>Numer telefonu</label>
                            <input type='text' value={phone} name='phone' onChange={handleInput}/>
                        </div>
                        {error.phoneError === null ? '' : <p style={style}>{error.phoneError}</p>}
                    </div>
                    <div className={'input__address'}>
                        <h3>Termin odbioru:</h3>
                        <div className={'input__address__element'}>
                            <label>Data</label>
                            <input type='text' value={date} name='date' onChange={handleInput}/>
                        </div>
                        <div className={'input__address__element'}>
                            <label>Godzina</label>
                            <input type='text' value={hour} name='hour' onChange={handleInput}/>
                        </div>
                        {error.hourError === null ? '' : <p style={style}>{error.hourError}</p>}
                        <div className={'input__address__element'}>
                            <label className={'label__supplier'}>Uwagi <br/>dla kuriera</label>
                            <textarea className={'input__supplier'} value={comment} name='comment'
                                      onChange={handleInput}/>
                        </div>
                    </div>
                </div>
                <div>
                    <LinkStyled to={'/giveaway/3'}>
                        <FooterButtonStyled style={{
                            backgroundColor: 'transparent',
                            position: 'absolute',
                            bottom: '7rem'
                        }}>Wstecz</FooterButtonStyled>
                    </LinkStyled>
                    <Link to={error.isError === false ? '/giveaway/summary' : '/giveaway/4'} replace>
                        <FooterButtonStyled style={{
                            backgroundColor: 'transparent',
                            position: 'absolute',
                            bottom: '7rem',
                            left: '12rem'
                        }} onClick={handleSubmit}>Dalej</FooterButtonStyled>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GiveawayFormPage4;