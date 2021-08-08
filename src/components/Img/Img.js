import React from 'react';
import {ImgStyles} from "./Img.styles";
import hero from '../../assets/Home-Hero-Image.jpg'
import giveaway from '../../assets/Form-Hero-Image.jpg'

export const ImgHeader = () => {
    return (
        <div style={{width: '50%'}}>
            <ImgStyles src={hero}/>
        </div>
    );
};

export const ImgGiveaway = () => {
    return (
        <div style={{width: '50%'}}>
            <ImgStyles src={giveaway}/>
        </div>
    );
}