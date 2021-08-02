import React from 'react';
import decoration from '../assets/Decoration.svg'
import {LinkStyled} from "./Link/Link.styles";
import {ButtonGiveAway} from "./Button/Button";
import icon1 from "../assets/Icon-1.svg"
import icon2 from "../assets/Icon-2.svg"
import icon3 from "../assets/Icon-3.svg"
import icon4 from "../assets/Icon-4.svg"

const Instruction = () => {
    return (
        <div className={'instruction'} >
            <div className={'instruction__title'}>
                <h2>Wystarczą 4 proste kroki</h2>
                <img src={decoration} />
            </div>
            <div className={'instruction__field'}>
                <div className={'column instruction__column'}>
                    <img src={icon1}/>
                    <h3>Wybierz rzeczy</h3>
                    <hr />
                    <p>ubrania, zabawki,<br />sprzęt i inne</p>
                </div>
                <div className={'column instruction__column'}>
                    <img src={icon2}/>
                    <h3>Spakuj je</h3>
                    <hr />
                    <p>skorzystaj z<br />worków na śmieci</p>
                </div>
                <div className={'column instruction__column'}>
                    <img src={icon3}/>
                    <h3>Zdecyduj komu<br />chcesz pomóc</h3>
                    <hr />
                    <p>wybierz<br />zaufane miejsce</p>
                </div>
                <div className={'column instruction__column'}>
                    <img src={icon4}/>
                    <h3>Zamów kuriera</h3>
                    <hr />
                    <p>kurier przyjedzie<br />w dogodnym terminie</p>
                </div>
            </div>
            <div>
                <LinkStyled to='/logowanie'><ButtonGiveAway /></LinkStyled>
            </div>
        </div>
    );
};

export default Instruction;