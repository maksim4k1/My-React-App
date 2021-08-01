import style from './SignIn.module.css';
import SignInForm from './SignInForm/SignInForm';

function SignIn(props){
    // Return XML
    return(
        <section className={style.section}>
            <SignInForm signIn={props.signIn} dispatch={props.dispatch}/>
        </section>
    );
}

export default SignIn;