import React, {useContext, useState} from 'react';
import {OptionStyled, SelectStyled, TitleStyled} from "../SelectBags/SelectBags.styles";
import {GiveawayContext} from "../../Views/GiveawayForm/GiveawayForm";
import {OptionWrapperLocalization} from "./SelectLocalization.styles";

const SelectLocalization = () => {
    const context = useContext(GiveawayContext);
    const {setData, data} = context;
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('- wybierz -');

    const handleOpen = () => {
        setIsOpen(prev => !prev)
    };

    const handleClick = (e) => {
        setTitle(e.target.value)
        setIsOpen(prev => !prev)
        setData({...data, localization: e.target.value})
    };

    return (
        <div>
            <SelectStyled onClick={handleOpen}>
                <TitleStyled>{title}</TitleStyled>
            </SelectStyled>
            {isOpen && <OptionWrapperLocalization>
                <OptionStyled value={"Poznań"} onClick={handleClick}>Poznań</OptionStyled>
                <OptionStyled value={"Warszawa"} onClick={handleClick}>Warszawa</OptionStyled>
                <OptionStyled value={"Kraków"} onClick={handleClick}>Kraków</OptionStyled>
                <OptionStyled value={"Wrocław"} onClick={handleClick}>Wrocław</OptionStyled>
                <OptionStyled value={"Katowice"} onClick={handleClick}>Katowice</OptionStyled>
            </OptionWrapperLocalization>}
        </div>
    );
};

export default SelectLocalization;