import React from 'react';
import {DecorationImgStyled} from "./DecorationImg.styles";
import decoration from '../../assets/Decoration.svg'

const DecorationImg = () => {
    return (
        <DecorationImgStyled src={decoration}/>
    );
};

export default DecorationImg;