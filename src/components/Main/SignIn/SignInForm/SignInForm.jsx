import { NavLink } from 'react-router-dom';
import style from './SignInForm.module.css';
import SignInInput from './SignInInput/SignInInput';

function SignInForm(props){
    function signIn(event){
        props.dispatch({type: "SIGN-IN"});
        if(props.signIn.signInError !== ""){
            event.preventDefault();
        }
    }

    // Return XML
    return(
        <form className={style.form} onSubmit={signIn}>
            <h2 className={style.title}>Войти</h2>

            <SignInInput signIn={props.signIn} dispatch={props.dispatch} labelText="Введите логин:" value="signInLogin" type="text" />
            <SignInInput signIn={props.signIn} dispatch={props.dispatch} labelText="Введите пароль:" value="signInPassword" type="password" />
            
            <div className={style.error}>{props.signIn.signInError}</div>
            <NavLink onClick={signIn} to="/profile" className={style.button}><button type="submit">Войти</button></NavLink>
            <p className={style.text}>Не зарегистрированы? <NavLink to="/signup" className={style.link}>Регистрация</NavLink></p>
        </form>
    );
}

export default SignInForm;