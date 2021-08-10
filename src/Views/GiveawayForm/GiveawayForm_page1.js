import React, {useContext} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import {GiveawayContext} from "./GiveawayForm";

const GiveawayFormPage1 = ({setFirstPage, setSecondPage}) => {
    const context = useContext(GiveawayContext);
    const {handleCheck} = context;

    //move to next step
    const handleNext = () => {
        setFirstPage(false);
        setSecondPage(true)
    };

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
                    <input type='checkbox' value='ubrania, które nadają sie do ponownego użycia' name='type'
                    onChange={handleCheck}/>
                    <span className={'checkmark'}/>
                    ubrania, które nadają sie do ponownego użycia
                </label>
                <label className={'checkbox'}>
                    <input type='checkbox' value='ubrania, do wyrzucenia' name='type'
                           onChange={handleCheck}/>
                    <span className={'checkmark'}/>
                    ubrania, do wyrzucenia
                </label>
                <label className={'checkbox'}>
                    <input type='checkbox' value='zabawki' name='type'
                           onChange={handleCheck}/>
                    <span className={'checkmark'}/>
                    zabawki
                </label>
                <label className={'checkbox'}>
                    <input type='checkbox' value='książki' name='type'
                           onChange={handleCheck}/>
                    <span className={'checkmark'}/>
                    książki
                </label>
                <label className={'checkbox'}>
                    <input type='checkbox' value='inne' name='type'
                           onChange={handleCheck}/>
                    <span className={'checkmark'}/>
                    inne
                </label>
                <div>
                <FooterButtonStyled style={{backgroundColor:'transparent',
                    position:'absolute',
                    bottom:'7rem'}}
                onClick={handleNext}>Dalej</FooterButtonStyled>
                </div>
            </div>
        </div>
    );
};

export default GiveawayFormPage1;