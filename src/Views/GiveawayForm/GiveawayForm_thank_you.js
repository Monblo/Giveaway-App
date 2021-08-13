import React from 'react';
import DecorationImg from "../../components/DecorationImg/DecorationImg";

const GiveawayFormThankYou = () => {
    return (
        <div className={'giveaway__form'}>
            <div className={'form__thank_you'}>
                <h2>Dziękujemy za wysłanie formularza <br/> Na maila prześlemy wszystkie <br/> informacje
                    o odbiorze.</h2>
                <DecorationImg/>
            </div>
        </div>
    );
};

export default GiveawayFormThankYou;