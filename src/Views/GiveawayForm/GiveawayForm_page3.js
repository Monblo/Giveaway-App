import React, {useState, useContext} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import {GiveawayContext} from "./GiveawayForm";
import SelectLocalization from "../../components/SelectLocalization/SelectLocalization";
import {Theme} from "../../Utils/Theme";

const GiveawayFormPage3 = () => {
    const {
        data,
        help1,
        help2,
        help3,
        help4,
        help5,
        helpGroupOption,
        setData,
        handleCheck,
        handleNext,
        handlePrev
    } = useContext(GiveawayContext);
    const [error, setError] = useState({
        helpError: '',
        noError: ''
    });

    //check more than one group
    const handleCheckHelpgroup = (e) => {
        const name = e.target.name;

        if (data[name] === '') {
            setData(prev => {
                return {...prev, [name]: e.target.value}
            })
        } else {
            setData(prev => {
                return {...prev, [name]: ''}
            })
        }
    };

    //group validation
    const handleSubmit = () => {
        const errorsTmp = {
            helpError: null,
            noError: true
        }

        if (help1 === '' && help2 === '' && help3 === '' && help4 === '' && help5 === '') {
            errorsTmp.helpError = 'Musisz wybrać jedną grupę!'
        }

        if (errorsTmp.helpError !== null) {
            errorsTmp.noError = false
        } else {
            handleNext('/giveaway/4')
        }

        setError(errorsTmp);
    };

    //style for validation
    const style = {
        color: 'red',
        fontSize: '.8rem',
        fontWeight: '700',
        width: '20rem'
    };

    const styleColored = {
        backgroundColor: Theme.colors.firstSectionColor
    };

    const styleFree = {
        backgroundColor: 'transparent'
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
                    {/*custom select component*/}
                    <SelectLocalization/>
                </div>
                <h3>Komu chcesz pomóc?</h3>
                <div className={'list__help_groups'}>
                    <label className={'checkbox'} style={help1 ? styleColored : styleFree}>
                        <input type='checkbox' value={'dzieciom'} name='help1' onClick={handleCheckHelpgroup}/>
                        dzieciom
                    </label>
                    <label className={'checkbox'} style={help2 ? styleColored : styleFree}>
                        <input type='checkbox' value={'samotnym matkom'} name='help2' onClick={handleCheckHelpgroup}/>
                        samotnym matkom
                    </label>
                    <label className={'checkbox'} style={help3 ? styleColored : styleFree}>
                        <input type='checkbox' value={'bezdomnym'} name='help3' onClick={handleCheckHelpgroup}/>
                        bezdomnym
                    </label>
                    <label className={'checkbox'} style={help4 ? styleColored : styleFree}>
                        <input type='checkbox' value={'niepełnosprawnym'} name='help4' onClick={handleCheckHelpgroup}/>
                        niepełnosprawnym
                    </label>
                    <label className={'checkbox'} style={help5 ? styleColored : styleFree}>
                        <input type='checkbox' value={'osobom starszym'} name='help5' onClick={handleCheckHelpgroup}/>
                        osobom starszym
                    </label>
                    {error.helpError && <p style={style}>{error.helpError}</p>}
                </div>
                <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                <input className={'input__localization'} type='text' value={helpGroupOption} name='helpGroupOption'
                       onChange={handleCheck}/>
                <div>
                    <FooterButtonStyled style={{
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        bottom: '7rem'
                    }} onClick={() => handlePrev('/giveaway/2')}>
                        Wstecz</FooterButtonStyled>
                    <FooterButtonStyled style={{
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        bottom: '7rem',
                        left: '12rem'
                    }} onClick={handleSubmit}>
                        Dalej</FooterButtonStyled>
                </div>
            </div>
        </div>
    );
};

export default GiveawayFormPage3;