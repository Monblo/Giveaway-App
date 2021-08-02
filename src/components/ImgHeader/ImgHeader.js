import React from 'react';
import {ImgHeaderStyles} from "./ImgHeader.styles";
import hero from '../../assets/Home-Hero-Image.jpg'

const ImgHeader = () => {
    return (
        <div style={{width: '60%'}}>
            <ImgHeaderStyles src={hero}/>
        </div>
    );
};

export default ImgHeader;