import React, {useState, useContext} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import {GiveawayContext} from "./GiveawayForm";
import {Redirect} from "react-router-dom";

const GiveawayFormPage4 = () => {

    const context = useContext(GiveawayContext);
    const {street, city, postCode, phone, date, hour, comment, handleInput} = context;
    const [page, setPage] = useState({
        error: {
            streetError: '',
            cityError: '',
            postCodeError: '',
            phoneError: '',
            hourError: '',
            noError: ''
        },
        prevPage: false
    });

    //validation
    const handleSubmit = () => {
        const errorsTmp = {
            streetError: null,
            cityError: null,
            postCodeError: null,
            phoneError: null,
            hourError: null,
            noError: true
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

        if (errorsTmp.streetError !== null || errorsTmp.cityError !== null || errorsTmp.postCodeError !== null ||
            errorsTmp.phoneError !== null || errorsTmp.hourError !== null) {
            errorsTmp.noError = false
        }

        setPage({error: errorsTmp});
    };

    const handlePrev = () => {
        setPage(prev => {
            return {...prev, prevPage: true}
        })
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
                        {page.error.streetError && <p style={style}>{page.error.streetError}</p>}
                        <div className={'input__address__element'}>
                            <label>Miasto</label>
                            <input type='text' value={city} name='city' onChange={handleInput}/>
                        </div>
                        {page.error.cityError && <p style={style}>{page.error.cityError}</p>}
                        <div className={'input__address__element'}>
                            <label>Kod pocztowy</label>
                            <input type='text' value={postCode} name='postCode' onChange={handleInput}/>
                        </div>
                        {page.error.postCodeError && <p style={style}>{page.error.postCodeError}</p>}
                        <div className={'input__address__element'}>
                            <label>Numer telefonu</label>
                            <input type='text' value={phone} name='phone' onChange={handleInput}/>
                        </div>
                        {page.error.phoneError && <p style={style}>{page.error.phoneError}</p>}
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
                        {page.error.hourError && <p style={style}>{page.error.hourError}</p>}
                        <div className={'input__address__element'}>
                            <label className={'label__supplier'}>Uwagi <br/>dla kuriera</label>
                            <textarea className={'input__supplier'} value={comment} name='comment'
                                      onChange={handleInput}/>
                        </div>
                    </div>
                </div>
                <div>
                    <FooterButtonStyled style={{
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        bottom: '7rem'
                    }} onClick={handlePrev}>
                        {page.prevPage && <Redirect to={'/giveaway/3'}/>}
                        Wstecz</FooterButtonStyled>
                    <FooterButtonStyled style={{
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        bottom: '7rem',
                        left: '12rem'
                    }} onClick={handleSubmit}>
                        {page.error.noError && <Redirect to={'/giveaway/summary'}/>}
                        Dalej</FooterButtonStyled>
                </div>
            </div>
        </div>
    );
};

export default GiveawayFormPage4;