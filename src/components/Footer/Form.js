import React, {useEffect, useState} from 'react';
import {FooterButtonStyled} from "../Button/Button.styles";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [msgError, setMsgError] = useState('');
    const [success, setSuccess] = useState('');

    const nameChange = (e) => {
        const tempName = e.target.value
        setName(tempName)
    };

    const emailChange = (e) => {
        const tempEmail = e.target.value
        setEmail(tempEmail)
    };

    const messageChange = (e) => {
        const tempMessage = e.target.value
        setMessage(tempMessage)
    };

    //form validation
    const handleSubmit = (e) => {
        e.preventDefault();

        if (/\s/.test(name)){setNameError('Podane imię jest nieprawidłowe!')
        } else {
            setNameError(null)
        }

        if (message.length < 120){setMsgError('Wiadomość musi mieć conajmniej 120 znaków!')
        } else {
            setMsgError(null)
        }

        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
        if (re.test(email)){setEmailError(null)
        } else {
            setEmailError('Podany email jest nieprawidłowy!')
        }
    };

    //display success text
    useEffect(() => {
        if (nameError == null && emailError == null && msgError == null){
            setSuccess('Wiadomość została wysłana! Wkrótce się skontaktujemy.');
            setName('');
            setMessage('');
            setEmail('');
        } else {setSuccess(null)}
    },[nameError, emailError, msgError]);

    return (
        <>
            {success && <p style={{color:'green'}} className={'success'}>{success}</p>}
        <form onSubmit={handleSubmit}>
            <div className={'form__info'}>
                <div className={'input__name'}>
                    <label>Wpisz swoje imię</label>
                    <input type='text' name='name' placeholder='Monika' value={name} onChange={nameChange}/>
                    {nameError && <p style={{color:'red',
                        fontSize:'0.75rem',
                    fontWeight:'700'}}>{nameError}</p>}
                </div>
                <div>
                    <label>Wpisz swój email</label>
                    <input type='text' name='email' placeholder='abc@xyz.pl' value={email} onChange={emailChange}/>
                    {emailError && <p style={{color:'red',
                        fontSize:'0.75rem',
                        fontWeight:'700'}}>{emailError}</p>}
                </div>
            </div>
            <label>Wpisz swoją wiadomość</label>
            <textarea name='text' className={'input__text'} value={message} onChange={messageChange}
                   placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'/>
            {/*<LinkStyled to='/logowanie'>*/}
            {msgError && <p style={{color:'red',
                fontSize:'0.75rem',
                fontWeight:'700'}}>{msgError}</p>}
            <FooterButtonStyled type='submit' className={'form__button'} >Wyślij</FooterButtonStyled>
            {/*</LinkStyled>*/}
        </form>
        </>
    );
};

export default Form;