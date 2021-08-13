import React, {useState, useContext} from 'react';
import {OptionStyled, OptionWrapperStyled, SelectStyled, TitleStyled} from "./SelectBags.styles";
import {GiveawayContext} from "../../Views/GiveawayForm/GiveawayForm";

const SelectBags = () => {
    const context = useContext(GiveawayContext);
    const {setData} = context;
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('- wybierz -');

    const handleOpen = () => {
        setIsOpen(prev => !prev)
    };

    const handleClick = (e) => {
        setTitle(e.target.value)
        setIsOpen(prev => !prev)
        setData(prev => {
            return {...prev, bags: e.target.value}})
    };

    return (
        <div>
            <SelectStyled onClick={handleOpen}>
                <TitleStyled>{title}</TitleStyled>
            </SelectStyled>
            {isOpen && <OptionWrapperStyled>
                <OptionStyled value={"1"} onClick={handleClick}>1</OptionStyled>
                <OptionStyled value={"2"} onClick={handleClick}>2</OptionStyled>
                <OptionStyled value={"3"} onClick={handleClick}>3</OptionStyled>
                <OptionStyled value={"4"} onClick={handleClick}>4</OptionStyled>
                <OptionStyled value={"5"} onClick={handleClick}>5</OptionStyled>
            </OptionWrapperStyled>}
        </div>
    );
};

export default SelectBags;