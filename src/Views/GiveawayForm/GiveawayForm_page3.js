import React, {useState, useContext} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import {GiveawayContext} from "./GiveawayForm";

const GiveawayFormPage3 = ({ setSecondPage, setThirdPage, setFourthPage}) => {
    const context = useContext(GiveawayContext);
    const {localization, helpGroup, option, handleCheck} = context;

    const [helpGroupError, setHelpGroupError] = useState();

    const handleSubmit = () => {
        if (helpGroup === ''){setHelpGroupError('Musisz wybrać jedną grupę!')
        } else {setHelpGroupError(null);
            setFourthPage(true);
            setThirdPage(false);
        }
    };

    const style = {
        color: 'red',
        fontSize: '.8rem',
        fontWeight: '700',
        width: '20rem'
    };

    //move to previous step
    const handlePrev = () => {
        setThirdPage(false)
        setSecondPage(true)
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
                    <button value='dzieciom' name='helpGroup' onClick={handleCheck}>dzieciom</button>
                    <button value='samotnym matkom' name='helpGroup' onClick={handleCheck}>samotnym matkom</button>
                    <button value='bezdomnym' name='helpGroup' onClick={handleCheck}>bezdomnym</button>
                    <button value='niepełnosprawnym' name='helpGroup' onClick={handleCheck}>niepełnosprawnym</button>
                    <button value='osobom starszym' name='helpGroup' onClick={handleCheck}>osobom starszym</button>
                    {helpGroupError ? <p style={style}>{helpGroupError}</p> : ''}
                </div>
                <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                <input className={'input__localization'} type='text' value={option} name='helpGroupOption'
                       onChange={handleCheck}/>
                <div>
                    <FooterButtonStyled style={{backgroundColor:'transparent',
                        position:'absolute',
                        bottom:'7rem'}} onClick={handlePrev}>Wstecz</FooterButtonStyled>
                    <FooterButtonStyled style={{backgroundColor:'transparent',
                        position:'absolute',
                        bottom:'7rem',
                        left: '12rem'}} onClick={handleSubmit}>Dalej</FooterButtonStyled>
                </div>
            </div>
        </div>
    );
};

export default GiveawayFormPage3;