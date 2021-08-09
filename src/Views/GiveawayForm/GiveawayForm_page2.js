import React from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";

const GiveawayFormPage2 = ({handleBagsNumber, bags, setFirstPage, setSecondPage, setThirdPage}) => {

    //move to next step
    const handleNext = () => {
        setSecondPage(false);
        setThirdPage(true)
    };

    //move to previous step
    const handlePrev = () => {
        setSecondPage(false);
        setFirstPage(true)
    };

    return (
        <div>
            <div className={'alert__field'}>
                <h2>Ważne!</h2>
                <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie
                spakować rzeczy znajdziesz TUTAJ.</p>
            </div>
            <div className={'giveaway__form'}>
                <p>Krok 2/4</p>
                <h2>Podaj liczbę worków, w które spakowałeś/aś rzeczy:</h2>
                <div className={'select__step2'}>
                    <p>Liczba 60l worków:</p>
                        <select value={bags} onChange={handleBagsNumber}>
                            <option className={'hidden'} value="0">-wybierz-</option>
                            <option className={'select__item'} value="1">1</option>
                            <option className={'select__item'} value="2">2</option>
                            <option className={'select__item'} value="3">3</option>
                            <option className={'select__item'} value="4">4</option>
                            <option className={'select__item'} value="5">5</option>
                        </select>
                    </div>
                <div>
                    <FooterButtonStyled style={{backgroundColor:'transparent',
                        position:'absolute',
                        bottom:'7rem'}} onClick={handlePrev}>Wstecz</FooterButtonStyled>
                    <FooterButtonStyled style={{backgroundColor:'transparent',
                        position:'absolute',
                        bottom:'7rem',
                        left: '12rem'}} onClick={handleNext}>Dalej</FooterButtonStyled>
                </div>
            </div>
        </div>
    );
};

export default GiveawayFormPage2;