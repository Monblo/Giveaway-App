import React, {useEffect, useState, useContext} from 'react';
import decoration from "../../assets/Decoration.svg";
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import {Theme} from "../../Utils/Theme";
import {Link, useHistory} from "react-router-dom";
import {auth} from "../../firebase";
import {AuthContext} from "../../authContext";

const SignUpForm = () => {
    const [singUpData, setSignUpData] = useState({
        password: '',
        password2: '',
        email: ''
    });
    const [error, setError] = useState({
        passwordError: '',
        password2Error: '',
        emailError: '',
        noError: ''
    });
    const history = useHistory();

    const handleUser = async (e) => {
        const tempUser = e.target.value;
        const name = e.target.name;
        setSignUpData({...singUpData, [name]: tempUser})
    };

    //SignIn validation
    const handleSumbit = (e) => {
        e.preventDefault();
        const errorsTmp = {
            passwordError: null,
            password2Error: null,
            emailError: null,
            noError: true,
        }

        if (singUpData.password.length < 6) {
            errorsTmp.passwordError = 'Podane hasło jest za krótkie!'
        }

        if (singUpData.password2.length < 6 || singUpData.password2 !== singUpData.password) {
            errorsTmp.Password2Error = 'Podane hasło jest nieprawidłowe!'
        }

        const re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
        if (re.test(singUpData.email) === false) {
            errorsTmp.emailError = 'Podany email jest nieprawidłowy!'
        }

        if (errorsTmp.passwordError !== null || errorsTmp.emailError !== null ||
            errorsTmp.password2Error !== null) {
            errorsTmp.noError = false
        }

        setError(errorsTmp);
    };

    useEffect(async () => {
        if (error.noError) {
            try {
                await auth.createUserWithEmailAndPassword(singUpData.email, singUpData.password)
                history.push('/')
            } catch (err) {
                console.log(err)
            }
        }
    }, [error.noError]);

    const errorStyle = {
        color: 'red',
        fontSize: '0.75rem',
        fontWeight: '700'
    };

    const style = {
        borderColor: 'red'
    };

    return (
        <div className={'signIn__container'}>
            <h2>Zarejestruj się</h2>
            <img src={decoration}/>
            <form className={'form__signIn'} onSubmit={handleSumbit}>
                <div className={'form__signIn__field'}>
                    <label>Email</label>
                    <input type='text' name={'email'} value={singUpData.email} onChange={handleUser}
                           style={error.emailError ? style : {}}/>
                    {error.emailError && <p style={errorStyle}>{error.emailError}</p>}
                    <label>Hasło</label>
                    <input type='password' name={'password'} value={singUpData.password} onChange={handleUser}
                           style={error.passwordError ? style : {}}/>
                    {error.passwordError && <p style={errorStyle}>{error.passwordError}</p>}
                    <label>Powtórz Hasło</label>
                    <input type='password' name={'password2'} value={singUpData.password2} onChange={handleUser}
                           style={error.password2Error ? style : {}}/>
                    {error.password2Error && <p style={errorStyle}>{error.password2Error}</p>}
                </div>
                <div className={"signIn__buttons"}>
                    <FooterButtonStyled type='submit' className={'form__button'}
                                        style={{borderColor: Theme.colors.lightColor}}>
                        Załóż konto
                    </FooterButtonStyled>
                    <Link to={'/logowanie'}>
                        <FooterButtonStyled className={'form__button'}>
                            Zaloguj się</FooterButtonStyled>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;