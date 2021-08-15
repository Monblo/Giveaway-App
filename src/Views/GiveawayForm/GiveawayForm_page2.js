import React, {useContext} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import SelectBags from "../../components/SelectBags/SelectBags";
import {GiveawayContext} from "./GiveawayForm";

const GiveawayFormPage2 = () => {
    const context = useContext(GiveawayContext);
    const {handleNext, handlePrev} = context;

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
                    {/*custom select component*/}
                    <SelectBags/>
                </div>
                <div>
                    <FooterButtonStyled style={{
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        bottom: '7rem'
                    }} onClick={() => handlePrev('/giveaway')}>
                        Wstecz</FooterButtonStyled>
                    <FooterButtonStyled style={{
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        bottom: '7rem',
                        left: '12rem'
                    }} onClick={() => handleNext('/giveaway/3')}>
                        Dalej</FooterButtonStyled>
                </div>
            </div>
        </div>
    );
};

export default GiveawayFormPage2;