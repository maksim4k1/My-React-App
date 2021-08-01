import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './SignUpForm.module.css';
import SignUpInput from './SignUpInput/SignUpInput';

function SignUpForm(props){
    function SignUp(event){
        props.dispatch({type: "SIGN-UP"});
        if(props.signUp.signUpError !== ""){
            event.preventDefault();
        }
    }

    // Return XML
    return(
        <form className={style.form} onSubmit={SignUp}>
            <h2 className={style.title}>Регистрация</h2>

            <SignUpInput signUp={props.signUp} dispatch={props.dispatch} labelText="Введите логин:" value="signUpLogin" type="text"/>
            <SignUpInput signUp={props.signUp} dispatch={props.dispatch} labelText="Введите Email:" value="signUpEmail" type="email"/>
            <SignUpInput signUp={props.signUp} dispatch={props.dispatch} labelText="Введите имя:" value="signUpName" type="text"/>
            <SignUpInput signUp={props.signUp} dispatch={props.dispatch} labelText="Введите пароль:" value="signUpPassword" type="password"/>
            <SignUpInput signUp={props.signUp} dispatch={props.dispatch} labelText="Подтвердите пароль:" value="signUpConfirmPassword" type="password"/>

            <div className={style.error}>{props.signUp.signUpError}</div>
            <NavLink to="/profile" onClick={SignUp} className={style.button}><button type="submit">Регистрация</button></NavLink>
            <p className={style.text}>Уже зарегистрированы? <NavLink to="/signin" className={style.link}>Войти</NavLink></p>
        </form>
    );
}

export default SignUpForm;