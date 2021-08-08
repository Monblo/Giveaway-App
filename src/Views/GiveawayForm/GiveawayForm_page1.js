import React from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";

const GiveawayFormPage1 = ({handleCheckType}) => {

    return (
        <div>
            <div className={'alert__field'}>
                <h2>Ważne!</h2>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej
                je przekazać.</p>
            </div>
            <div className={'giveaway__form'}>
                <p>Krok 1/4</p>
                <h2>Zaznacz co chcesz oddać:</h2>
                <label className={'checkbox'}>
                    <input type='checkbox' value='ubrania, które nadają sie do ponownego użycia'
                    onChange={handleCheckType}/>
                    <span className={'checkmark'}/>
                    ubrania, które nadają sie do ponownego użycia
                </label>
                <label className={'checkbox'}>
                    <input type='checkbox' value='ubrania, do wyrzucenia' onChange={handleCheckType}/>
                    <span className={'checkmark'}/>
                    ubrania, do wyrzucenia
                </label>
                <label className={'checkbox'}>
                    <input type='checkbox' value='zabawki' onChange={handleCheckType}/>
                    <span className={'checkmark'}/>
                    zabawki
                </label>
                <label className={'checkbox'}>
                    <input type='checkbox' value='książki' onChange={handleCheckType}/>
                    <span className={'checkmark'}/>
                    książki
                </label>
                <label className={'checkbox'}>
                    <input type='checkbox' value='inne' onChange={handleCheckType}/>
                    <span className={'checkmark'}/>
                    inne
                </label>
                <FooterButtonStyled style={{backgroundColor:'transparent',
                    position:'absolute',
                    bottom:'7rem'}}>Dalej</FooterButtonStyled>
            </div>
        </div>
    );
};

export default GiveawayFormPage1;