import React from 'react';
import DecorationImg from "./DecorationImg/DecorationImg";
import signature from '../assets/Signature.svg'

const AboutUs = () => {
    return (
            <div className={'about_us'} name='aboutUs' >
                <div className={'about_us__field'}>
                    <h2>O nas</h2>
                    <DecorationImg />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <img src={signature} className={'signature'}/>
                </div>
                <div className={'about_us_img'}/>
            </div>
    );
};

export default AboutUs;