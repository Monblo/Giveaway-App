import React from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import {LinkStyled} from "../../components/Link/Link.styles";
import SelectBags from "../../components/SelectBags/SelectBags";

const GiveawayFormPage2 = () => {
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
                    <SelectBags/>
                </div>
                <div>
                    <LinkStyled to={'/giveaway'}>
                    <FooterButtonStyled style={{backgroundColor:'transparent',
                        position:'absolute',
                        bottom:'7rem'}}>Wstecz</FooterButtonStyled>
                    </LinkStyled>
                    <LinkStyled to={'/giveaway/3'}>
                    <FooterButtonStyled style={{backgroundColor:'transparent',
                        position:'absolute',
                        bottom:'7rem',
                        left: '12rem'}}>Dalej</FooterButtonStyled>
                    </LinkStyled>
                </div>
            </div>
        </div>
    );
};

export default GiveawayFormPage2;