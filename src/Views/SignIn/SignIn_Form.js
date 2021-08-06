import React, {useEffect, useState} from 'react';
import decoration from "../../assets/Decoration.svg";
import {LinkStyled} from "../../components/Link/Link.styles";
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import {Theme} from "../../Utils/Theme";

const SignInForm = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');

    const passwordChange = (e) => {
        const tempPassword = e.target.value
        setPassword(tempPassword)
    };

    const emailChange = (e) => {
        const tempEmail = e.target.value
        setEmail(tempEmail)
    };

    //SignIn validation
    const handleSumbit = (e) => {
        e.preventDefault();

        if (password.length < 6){setPasswordError('Podane hasło jest za krótkie!')
        } else {
            setPasswordError(null)
        }

        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
        if (re.test(email)){setEmailError(null)
        } else {
            setEmailError('Podany email jest nieprawidłowy!')
        }
    };

    useEffect(() => {
        if (emailError == null && passwordError == null){
            setPassword('');
            setEmail('');
        }
    }, [emailError, passwordError]);

    const errorStyle = {
        color:'red',
        fontSize:'0.75rem',
        fontWeight:'700'
    };

    const style = {
        borderColor: 'red'
    };

    return (
            <div className={'signIn__container'}>
                <h2>Zaloguj się</h2>
                <img src={decoration} />
                <form className={'form__signIn'} onSubmit={handleSumbit}>
                     <div className={'form__signIn__field'}>
                        <label>Email</label>
                        {emailError ? <>
                            <input type='text' name={'email'} value={email} onChange={emailChange}
                            style={style} />
                            <p style={errorStyle}>{emailError}</p>
                            </> : <input type='text' name={'email'} value={email} onChange={emailChange}/>}
                        <label>Hasło</label>
                         {passwordError ? <><input type='text' name={'password'} style={style} onChange={passwordChange}/>
                                 <p style={errorStyle}>{passwordError}</p>
                             </> : <input type='text' name={'password'} onChange={passwordChange}/>}
                    </div>
                    <div className={"signIn__buttons"}>
                        <LinkStyled to={'/rejestracja'}>
                            <FooterButtonStyled className={'form__button'} style={{borderColor: Theme.colors.lightColor}}>
                                Załóż konto
                            </FooterButtonStyled>
                        </LinkStyled>
                        <FooterButtonStyled type='submit' className={'form__button'}>Zaloguj się</FooterButtonStyled>
                    </div>
                </form>
            </div>
    );
};

export default SignInForm;