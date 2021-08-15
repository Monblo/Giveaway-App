import React, {useEffect, useState} from 'react';
import {FooterButtonStyled} from "../Button/Button.styles";
import {postForm} from "./fetch_api";

const Form = () => {
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [error, setError] = useState({
        nameError: '',
        emailError: '',
        msgError: '',
        successError: '',
        noError: ''
    });

    const handleMessage = (e) => {
        const name = e.target.name;
        setContactData(prev => {
            return {...prev, [name]: e.target.value}
        })
    };

    //form validation
    const handleSubmit = (e) => {
        e.preventDefault()
        const errorsTmp = {
            nameError: null,
            emailError: null,
            msgError: null,
            successError: null
        }

        if (/\s/.test(contactData.name)) {
            errorsTmp.nameError = 'Podane imię jest nieprawidłowe!'
        }

        if (contactData.message.length < 120) {
            errorsTmp.msgError = 'Wiadomość musi mieć conajmniej 120 znaków!'
        }

        const re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
        if (re.test(contactData.email) === false) {
            errorsTmp.emailError = 'Podany email jest nieprawidłowy!'
        }

        if (contactData.nameError === null && contactData.emailError === null && contactData.msgError === null) {
            errorsTmp.successError = 'Wiadomość została wysłana! Wkrótce się skontaktujemy.'
        }

        setError(errorsTmp)
    };

    //send post data to endpoint
    useEffect(() => {
        const contactTmp = {
            name: '',
            email: '',
            message: ''
        }
        if (error.successError === null) {
            postForm(contactData)
            setContactData(contactTmp)
        }
    }, [error.successError]);

    const errorStyle = {
        color: 'red',
        fontSize: '0.75rem',
        fontWeight: '700'
    };

    const style = {
        borderColor: 'red'
    };

    return (
        <>
            {error.successError && <p style={{color: 'green'}} className={'success'}>{error.successError}</p>}
            <form onSubmit={handleSubmit}>
                <div className={'form__info'}>
                    <div className={'input__name'}>
                        <label>Wpisz swoje imię</label>
                        <input type='text' name='name' placeholder='Monika' value={contactData.name}
                               onChange={handleMessage} style={error.nameError ? style : {}}/>
                        {error.nameError && <p style={errorStyle}>{error.nameError}</p>}
                    </div>
                    <div>
                        <label>Wpisz swój email</label>
                        <input type='text' name='email' placeholder='abc@xyz.pl' value={contactData.email}
                               onChange={handleMessage} style={error.emailError ? style : {}}/>
                        {error.emailError && <p style={errorStyle}>{error.emailError}</p>}
                    </div>
                </div>
                <label>Wpisz swoją wiadomość</label>
                <textarea name='text' className={'input__text'} value={contactData.message}
                          onChange={handleMessage} style={error.msgError ? style : {}}
                          placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'/>
                {error.msgError && <p style={errorStyle}>{error.msgError}</p>}
                <FooterButtonStyled type='submit' className={'form__button'}>Wyślij</FooterButtonStyled>
            </form>
        </>
    );
};

export default Form;