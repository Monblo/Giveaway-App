import React, {useState} from 'react';
import decoration from "../../assets/Decoration.svg";
import {LinkStyled} from "../../components/Link/Link.styles";
import {FooterButtonStyled} from "../../components/Button/Button.styles";
import {Theme} from "../../Utils/Theme";

const SignUpForm = () => {
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [password2Error, setPassword2Error] = useState([]);
    const [emailError, setEmailError] = useState('');

    const passwordChange = (e) => {
        const tempPassword = e.target.value
        setPassword(tempPassword)
    };

    const password2Change = (e) => {
        const tempPassword2 = e.target.value
        setPassword2(tempPassword2)
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

        if (password2.length < 6 || password2 !== password){setPassword2Error('Podane hasło jest nieprawidłowe!')
        } else {
            setPassword2Error(null)
        }

        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
        if (re.test(email)){setEmailError(null)
        } else {
            setEmailError('Podany email jest nieprawidłowy!')
        }
    };

    return (
        <div className={'signIn__field'}>
            <h2>Zaloguj się</h2>
            <img src={decoration} />
            <form className={'form__signIn'} onSubmit={handleSumbit}>
                <label>Email</label>
                <input type='text' name={'email'} value={email} onChange={emailChange}/>
                {emailError && <p style={{color:'red',
                    fontSize:'0.75rem',
                    fontWeight:'700'}}>{emailError}</p>}
                <label>Hasło</label>
                <input type='text' name={'password'} onChange={passwordChange}/>
                {passwordError && <p style={{color:'red',
                    fontSize:'0.75rem',
                    fontWeight:'700'}}>{passwordError}</p>}
                <label>Powtórz Hasło</label>
                <input type='text' name={'password2'} onChange={password2Change}/>
                {password2Error && <p style={{color:'red',
                    fontSize:'0.75rem',
                    fontWeight:'700'}}>{password2Error}</p>}
                <div className={"signIn__buttons"}>
                    <LinkStyled to={'/rejestracja'}>
                        <FooterButtonStyled className={'form__button'} style={{borderColor: Theme.colors.lightColor}}>
                            Załóż konto
                        </FooterButtonStyled>
                    </LinkStyled>
                    <LinkStyled to={'/logowanie'}>
                        <FooterButtonStyled type='submit' className={'form__button'}>Zaloguj się</FooterButtonStyled>
                    </LinkStyled>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;