import React, {useState} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";

const GiveawayFormPage3 = ({handleLocalization, localization, handleHelpGroup}) => {

    return (
        <div>
            <div className={'alert__field'}>
                <h2>Ważne!</h2>
                <p>Jeżeli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce.
                Możesz też filtrować organizacje <br/> po ich lokalizacji bądź celu ich pomocy.</p>
            </div>
            <div className={'giveaway__form'}>
                <p>Krok 3/4</p>
                <h2>Lokalizacja:</h2>
                <div className={'select__step2'}>
                        <select value={localization} onChange={handleLocalization}>
                            <option className={'hidden'} value="0">-wybierz-</option>
                            <option className={'select__item'} value="Poznań">Poznań</option>
                            <option className={'select__item'} value="Warszawa">Warszawa</option>
                            <option className={'select__item'} value="Kraków">Kraków</option>
                            <option className={'select__item'} value="Wrocław">Wrocław</option>
                            <option className={'select__item'} value="Katowice">Katowice</option>
                        </select>
                </div>
                <h3>Komu chcesz pomóc?</h3>
                <ul className={'list__help_groups'}>
                    <li tabIndex='0' value='dzieciom' onClick={handleHelpGroup}>dzieciom</li>
                    <li tabIndex='0' value='samotnym matkom' onClick={handleHelpGroup}>samotnym matkom</li>
                    <li tabIndex='0' value='bezdomnym' onClick={handleHelpGroup}>bezdomnym</li>
                    <li tabIndex='0' value='niepełnosprawnym' onClick={handleHelpGroup}>niepełnosprawnym</li>
                    <li tabIndex='0' value='osobom starszym' onClick={handleHelpGroup}>osobom starszym</li>
                </ul>
                <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                <input className={'input__localization'} type='text'/>
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

export default GiveawayFormPage3;