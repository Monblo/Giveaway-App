import React, {useState, useContext, useEffect} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import {GiveawayContext} from "./GiveawayForm";
import {LinkStyled} from "../../components/Link/Link.styles";
import SelectLocalization from "../../components/SelectLocalization/SelectLocalization";
import {Theme} from "../../Utils/Theme";

const GiveawayFormPage3 = () => {
    const context = useContext(GiveawayContext);
    const {group1, group2, group3, group4, group5, option, setData, setColors} = context;

    const [isError, setIsError] = useState();

    //change color of checked item
    const handleColor = (e) => {
        const name = e.target.id;
        setColors(prev => {
            return {...prev, [name]: Theme.colors.firstSectionColor}
        })

        // if (e.target.style.backgroundColor === 'transparent') {
        //     setColors(prev => {
        //         return {...prev, [name]: Theme.colors.firstSectionColor}
        //     })
        // } else { setColors(prev => {
        //     return {...prev, [name]: 'transparent'}})
        // }
    };

    const handleCheck = (e) => {
        const name = e.target.name;
        setData(prev => {
            return {...prev, [name]: e.target.value}})
    };

    const handleSubmit = () => {
        if (group1 === '' && group2 === '' && group3 === '' && group4 === '' && group5 === '') {
            setIsError('Musisz wybrać jedną grupę!')
        } else {setIsError(null)}
    };

    console.log(isError)

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
                    <SelectLocalization/>
                </div>
                <h3>Komu chcesz pomóc?</h3>
                <div className={'list__help_groups'}>
                    <label className={'checkbox'}>
                        <input type='checkbox' value='dzieciom' name='group1' onChange={handleCheck} />
                        <span className={'help_group'} id='group1'
                              style={{backgroundColor: group1}} onClick={handleColor}>
                            dzieciom </span>
                    </label>
                    <label className={'checkbox'}>
                        <input type='checkbox' value='samotnym matkom' name='group2' onClick={handleCheck} />
                        <span className={'help_group'} id='group2'
                              style={{backgroundColor: group2}} onClick={handleColor}>
                        samotnym matkom
                        </span>
                    </label>
                    <label className={'checkbox'}>
                        <input type='checkbox' value='bezdomnym' name='group3' onClick={handleCheck} />
                        <span className={'help_group'} id='group3'
                              style={{backgroundColor: group3}} onClick={handleColor}>
                        bezdomnym
                        </span>
                    </label>
                    <label className={'checkbox'}>
                        <input type='checkbox' value='niepełnosprawnym' name='group4' onClick={handleCheck} />
                        <span className={'help_group'} id='group4'
                              style={{backgroundColor: group4}} onClick={handleColor}>
                        niepełnosprawnym
                        </span>
                    </label>
                    <label className={'checkbox'}>
                        <input type='checkbox' value='osobom starszym' name='group5' onClick={handleCheck} />
                        <span className={'help_group'} id='group5'
                              style={{backgroundColor: group5}} onClick={handleColor}>
                        osobom starszym
                        </span>
                    </label>
                    {isError === null ? '' : <p style={style}>{isError}</p>}
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
                    <LinkStyled to={isError === null && '/giveaway/4'}>
                    <FooterButtonStyled style={{backgroundColor:'transparent',
                        position:'absolute',
                        bottom:'7rem',
                        left: '12rem'}} onClick={handleSubmit}>Dalej</FooterButtonStyled>
                    </LinkStyled>
                </div>
            </div>
        </div>
    );
};

export default GiveawayFormPage3;