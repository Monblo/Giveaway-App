import React, {useState} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";

const GiveawayFormPage4 = () => {
    const [title, setTitle] = useState();

    const changeNumbers = (e) => {
        setTitle(e.target.value)
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
                            <input type='text'/>
                        </div>
                        <div className={'input__address__element'}>
                            <label>Miasto</label>
                            <input type='text'/>
                        </div>
                        <div className={'input__address__element'}>
                            <label>Kod pocztowy</label>
                            <input type='text'/>
                        </div>
                        <div className={'input__address__element'}>
                            <label>Numer telefonu</label>
                            <input type='text'/>
                        </div>
                    </div>
                    <div className={'input__address'}>
                        <h3>Termin odbioru:</h3>
                        <div className={'input__address__element'}>
                            <label>Data</label>
                            <input type='text'/>
                        </div>
                        <div className={'input__address__element'}>
                            <label>Godzina</label>
                            <input type='text'/>
                        </div>
                        <div className={'input__address__element '}>
                            <label className={'label__supplier'}>Uwagi <br/>dla kuriera</label>
                            <textarea className={'input__supplier'}/>
                        </div>
                    </div>
                </div>
                <div>
                    <FooterButtonStyled style={{backgroundColor:'transparent',
                        position:'absolute',
                        bottom:'7rem'}}>Wstecz</FooterButtonStyled>
                    <FooterButtonStyled style={{backgroundColor:'transparent',
                        position:'absolute',
                        bottom:'7rem',
                        left: '12rem'}}>Dalej</FooterButtonStyled>
                </div>
            </div>
        </div>
    );
};

export default GiveawayFormPage4;