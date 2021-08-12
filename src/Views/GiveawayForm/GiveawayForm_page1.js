import React, {useContext} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import {GiveawayContext} from "./GiveawayForm";
import {LinkStyled} from "../../components/Link/Link.styles";
import {Theme} from "../../Utils/Theme";

const GiveawayFormPage1 = () => {
    const context = useContext(GiveawayContext);
    const {type1, type2, type3, type4, type5, typeColor, setColors, handleCheck} = context;

    //change color of checked item
    const handleColor = (e) => {
        const name = e.target.id;
        setColors(prev => {return {...prev, ...typeColor, [name]: Theme.colors.firstSectionColor}})
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
                    onChange={handleCheck} />
                    <span className={'checkmark'} id='type1'
                          style={{backgroundColor: type1}} onClick={handleColor}/>
                    ubrania, które nadają sie do ponownego użycia
                </label>
                <label className={'checkbox'}>
                    <input type='checkbox' value='ubrania, do wyrzucenia' name='type'
                           onChange={handleCheck}/>
                    <span className={'checkmark'} id='type2'
                          style={{backgroundColor: type2}} onClick={handleColor}/>
                    ubrania, do wyrzucenia
                </label>
                <label className={'checkbox'}>
                    <input type='checkbox' value='zabawki' name='type'
                           onChange={handleCheck} />
                    <span className={'checkmark'} id='type3'
                          style={{backgroundColor: type3}} onClick={handleColor}/>
                    zabawki
                </label>
                <label className={'checkbox'}>
                    <input type='checkbox' value='książki' name='type'
                           onChange={handleCheck}/>
                    <span className={'checkmark'} id='type4'
                          style={{backgroundColor: type4}} onClick={handleColor}/>
                    książki
                </label>
                <label className={'checkbox'}>
                    <input type='checkbox' value='inne' name='type'
                           onChange={handleCheck}/>
                    <span className={'checkmark'} id='type5'
                          style={{backgroundColor: type5}} onClick={handleColor}/>
                    inne
                </label>
                <div>
                    <LinkStyled to={'/giveaway/2'}>
                <FooterButtonStyled style={{backgroundColor:'transparent',
                    position:'absolute',
                    bottom:'7rem'}}>
                    Dalej</FooterButtonStyled>
                    </LinkStyled>
                </div>
            </div>
        </div>
    );
};

export default GiveawayFormPage1;