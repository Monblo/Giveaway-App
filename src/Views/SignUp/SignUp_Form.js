import React, {useEffect, useState} from 'react';
import decoration from "../../assets/Decoration.svg";
import {LinkStyled} from "../../components/Link/Link.styles";
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import {Theme} from "../../Utils/Theme";

const SignUpForm = () => {
    const [singUp, setSignUp] = useState({
        password: '',
        password2: '',
        email: ''
    });
    const [error, setError] = useState({
        passwordError: '',
        password2Error: '',
        emailError: ''
    });
    const [isError, setIsError] = useState();

    const handleCheck = (e) => {
        const tempPassword = e.target.value;
        const name = e.target.name;
        setSignUp({...singUp, [name]: tempPassword})
    };

    //SignIn validation
    const handleSumbit = (e) => {
        e.preventDefault();

        if (singUp.password.length < 6){setError({passwordError: 'Podane hasło jest za krótkie!'})
        } else {
            setError({passwordError: null})
        }

        if (singUp.password2.length < 6 || singUp.password2 !== singUp.password){
            setError({Password2Error: 'Podane hasło jest nieprawidłowe!'})
        } else {
            setError({password2Error: null})
        }

        const re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
        if (re.test(singUp.email)){setError({emailError: null})
        } else {
            setError({emailError: 'Podany email jest nieprawidłowy!'})
        }
    };

    useEffect(() => {
        if (error.emailError == null && error.passwordError == null && error.password2Error == null){
            setIsError(false)
        } else {
            setIsError(true)
        }
    }, [error.emailError, error.passwordError, error.password2Error]);

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
            <h2>Zarejestruj się</h2>
            <img src={decoration} />
            <form className={'form__signIn'} onSubmit={handleSumbit}>
                <div className={'form__signIn__field'}>
                    <label>Email</label>
                    {error.emailError ? <>
                        <input type='text' name={'email'} value={singUp.email} onChange={handleCheck}
                               style={style} />
                        <p style={errorStyle}>{error.emailError}</p></>
                        : <input type='text' name={'email'} value={singUp.email} onChange={handleCheck}/>}
                    <label>Hasło</label>
                    {error.passwordError ? <><input type='text' name={'password'} value={singUp.password}
                                                    style={style} onChange={handleCheck}/>
                        <p style={errorStyle}>{error.passwordError}</p></>
                        : <input type='text' name={'password'} value={singUp.password} onChange={handleCheck}/>}
                    <label>Powtórz Hasło</label>
                    {error.passwordError ? <><input type='text' name={'password2'} value={singUp.password2}
                                                    style={style} onChange={handleCheck}/>
                        <p style={errorStyle}>{error.password2Error}</p></>
                        : <input type='text' name={'password2'} value={singUp.password2} onChange={handleCheck}/>}
                </div>
                <div className={"signIn__buttons"}>
                    <LinkStyled to={isError === false ? '/' : '/rejestracja'}>
                        <FooterButtonStyled type='submit' className={'form__button'} style={{borderColor: Theme.colors.lightColor}}>
                                Załóż konto
                        </FooterButtonStyled>
                    </LinkStyled>
                    <LinkStyled to={'/logowanie'}>
                        <FooterButtonStyled className={'form__button'}>Zaloguj się</FooterButtonStyled>
                    </LinkStyled>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;