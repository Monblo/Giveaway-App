import React, {useState, useContext} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import {GiveawayContext} from "./GiveawayForm";
import SelectLocalization from "../../components/SelectLocalization/SelectLocalization";
import {Theme} from "../../Utils/Theme";
import {Redirect} from "react-router-dom";

const GiveawayFormPage3 = () => {
    const context = useContext(GiveawayContext);
    const {
        data,
        help1,
        help2,
        help3,
        help4,
        help5,
        helpGroupOption,
        colors,
        group1,
        group2,
        group3,
        group4,
        group5,
        setData,
        setColors,
        handleCheck
    } = context;

    const [page, setPage] = useState({
        error: {
            helpError: '',
            noError: ''
        },
        prevPage: false
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

    // change color of checked item
    const handleColor = (e) => {
        const name = e.target.id;

        if (colors[name] === 'transparent') {
            setColors(prev => {
                return {...prev, [name]: Theme.colors.firstSectionColor}
            })
        } else {
            setColors(prev => {
                return {...prev, [name]: 'transparent'}
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
        }

        setPage({error: errorsTmp});
    };


    const handlePrev = () => {
        setPage(prev => {
            return {...prev, prevPage: true}
        })
    };

    //style for validation
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
                    {/*custom select component*/}
                    <SelectLocalization/>
                </div>
                <h3>Komu chcesz pomóc?</h3>
                <div className={'list__help_groups'}>
                    <label className={'checkbox'} id='group1' style={{backgroundColor: group1}}
                           onClick={handleColor}>
                        <input type='checkbox' value={'dzieciom'} name='help1' onClick={handleCheckHelpgroup}/>
                        dzieciom
                    </label>
                    <label className={'checkbox'} id='group2' style={{backgroundColor: group2}}
                           onClick={handleColor}>
                        <input type='checkbox' value={'samotnym matkom'} name='help2' onClick={handleCheckHelpgroup}/>
                        samotnym matkom
                    </label>
                    <label className={'checkbox'} id='group3' style={{backgroundColor: group3}}
                           onClick={handleColor}>
                        <input type='checkbox' value={'bezdomnym'} name='help3' onClick={handleCheckHelpgroup}/>
                        bezdomnym
                    </label>
                    <label className={'checkbox'} id='group4' style={{backgroundColor: group4}}
                           onClick={handleColor}>
                        <input type='checkbox' value={'niepełnosprawnym'} name='help4' onClick={handleCheckHelpgroup}/>
                        niepełnosprawnym
                    </label>
                    <label className={'checkbox'} id='group5' style={{backgroundColor: group5}}
                           onClick={handleColor}>
                        <input type='checkbox' value={'osobom starszym'} name='help5' onClick={handleCheckHelpgroup}/>
                        osobom starszym
                    </label>
                    {page.error.helpError && <p style={style}>{page.error.helpError}</p>}
                </div>
                <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                <input className={'input__localization'} type='text' value={helpGroupOption} name='helpGroupOption'
                       onChange={handleCheck}/>
                <div>
                    <FooterButtonStyled style={{
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        bottom: '7rem'
                    }} onClick={handlePrev}>
                        {page.prevPage && <Redirect to={'/giveaway/2'}/>}
                        Wstecz</FooterButtonStyled>
                    <FooterButtonStyled style={{
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        bottom: '7rem',
                        left: '12rem'
                    }} onClick={handleSubmit}>
                        {page.error.noError && <Redirect to={'/giveaway/4'}/>}
                        Dalej</FooterButtonStyled>
                </div>
            </div>
        </div>
    );
};

export default GiveawayFormPage3;