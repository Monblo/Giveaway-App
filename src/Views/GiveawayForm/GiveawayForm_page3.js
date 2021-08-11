import React, {useState, useContext} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import {GiveawayContext} from "./GiveawayForm";
import {LinkStyled} from "../../components/Link/Link.styles";

const GiveawayFormPage3 = () => {
    const context = useContext(GiveawayContext);
    const {group1, group2, group3, group4, group5, localization, helpGroup, option, handleColor, handleCheck} = context;

    const [helpGroupError, setHelpGroupError] = useState();

    const handleSubmit = () => {
        if (helpGroup === ''){setHelpGroupError('Musisz wybrać jedną grupę!')
        } else {setHelpGroupError(null)}
    };

    const style = {
        color: 'red',
        fontSize: '.8rem',
        fontWeight: '700',
        width: '20rem'
    };

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
                        <select value={localization} name='localization' onChange={handleCheck}>
                            <option className={'hidden'} value="0">-wybierz-</option>
                            <option className={'select__item'} value="Poznań">Poznań</option>
                            <option className={'select__item'} value="Warszawa">Warszawa</option>
                            <option className={'select__item'} value="Kraków">Kraków</option>
                            <option className={'select__item'} value="Wrocław">Wrocław</option>
                            <option className={'select__item'} value="Katowice">Katowice</option>
                        </select>
                </div>
                <h3>Komu chcesz pomóc?</h3>
                <div className={'list__help_groups'}>
                    <label className={'checkbox'}>
                        <input type='checkbox' value='dzieciom' name='helpGroup' onChange={handleCheck} />
                        <span className={'help_group'} id='group1'
                              style={{backgroundColor: group1}} onClick={handleColor}>
                            dzieciom </span>
                    </label>
                    <label className={'checkbox'}>
                        <input type='checkbox' value='samotnym matkom' name='helpGroup' onClick={handleCheck} />
                        <span className={'help_group'} id='group2'
                              style={{backgroundColor: group2}} onClick={handleColor}>
                        samotnym matkom
                        </span>
                    </label>
                    <label className={'checkbox'}>
                        <input type='checkbox' value='bezdomnym' name='helpGroup' onClick={handleCheck} />
                        <span className={'help_group'} id='group3'
                              style={{backgroundColor: group3}} onClick={handleColor}>
                        bezdomnym
                        </span>
                    </label>
                    <label className={'checkbox'}>
                        <input type='checkbox' value='niepełnosprawnym' name='helpGroup' onClick={handleCheck} />
                        <span className={'help_group'} id='group4'
                              style={{backgroundColor: group4}} onClick={handleColor}>
                        bezdomnym
                        </span>
                    </label>
                    <label className={'checkbox'}>
                        <input type='checkbox' value='osobom starszym' name='helpGroup' onClick={handleCheck} />
                        <span className={'help_group'} id='group5'
                              style={{backgroundColor: group5}} onClick={handleColor}>
                        osobom starszym
                        </span>
                    </label>
                    {helpGroupError ? <p style={style}>{helpGroupError}</p> : ''}
                </div>
                <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                <input className={'input__localization'} type='text' value={option} name='helpGroupOption'
                       onChange={handleCheck}/>
                <div>
                    <LinkStyled to={'/giveaway/2'}>
                    <FooterButtonStyled style={{backgroundColor:'transparent',
                        position:'absolute',
                        bottom:'7rem'}} >Wstecz</FooterButtonStyled>
                    </LinkStyled>
                    <LinkStyled to={'/giveaway/4'}>
                    <FooterButtonStyled style={{backgroundColor:'transparent',
                        position:'absolute',
                        bottom:'7rem',
                        left: '12rem'}} >Dalej</FooterButtonStyled>
                    </LinkStyled>
                </div>
            </div>
        </div>
    );
};

export default GiveawayFormPage3;