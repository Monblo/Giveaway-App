import React, {useState, useEffect} from 'react';
import decoration from "../../assets/Decoration.svg";
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import {Theme} from "../../Utils/Theme";
import {Link, useHistory} from "react-router-dom";
import {auth} from "../../firebase";

const SignInForm = () => {
    const [singInData, setSignInData] = useState({
        password: '',
        email: ''
    });
    const [error, setError] = useState({
        passwordError: '',
        emailError: '',
        noError: ''
    });
    const history = useHistory();

    const handleUser = (e) => {
        const tempUser = e.target.value;
        const name = e.target.name;
        setSignInData({...singInData, [name]: tempUser})
    };

    //SignIn validation
    const handleSumbit = (e) => {
        e.preventDefault();
        const errorsTmp = {
            passwordError: null,
            emailError: null,
            noError: true
        }

        if (singInData.password.length < 6) {
            errorsTmp.passwordError = 'Podane hasło jest za krótkie!'
        }

        const re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
        if (re.test(singInData.email) === false) {
            errorsTmp.emailError = 'Podany email jest nieprawidłowy!'
        }

        if (errorsTmp.passwordError !== null || errorsTmp.emailError !== null) {
            errorsTmp.noError = false
        }

        setError(errorsTmp);
    };

    useEffect(async () => {
        if (error.noError) {
            try {
                await auth.signInWithEmailAndPassword(singInData.email, singInData.password)
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
            <h2>Zaloguj się</h2>
            <img src={decoration}/>
            <form className={'form__signIn'} onSubmit={handleSumbit}>
                <div className={'form__signIn__field'}>
                    <label>Email</label>
                    <input type='text' name={'email'} value={singInData.email} onChange={handleUser}
                           style={error.emailError ? style : {}}/>
                    {error.emailError && <p style={errorStyle}>{error.emailError}</p>}
                    <label>Hasło</label>
                    <input type='password' name={'password'} value={singInData.password} onChange={handleUser}
                           style={error.passwordError ? style : {}}/>
                    {error.passwordError && <p style={errorStyle}>{error.passwordError}</p>}
                </div>
                <div className={"signIn__buttons"}>
                    <Link to={'/rejestracja'}>
                        <FooterButtonStyled className={'form__button'} style={{borderColor: Theme.colors.lightColor}}>
                            Załóż konto
                        </FooterButtonStyled>
                    </Link>
                    <FooterButtonStyled type='submit' className={'form__button'}>
                        Zaloguj się</FooterButtonStyled>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;