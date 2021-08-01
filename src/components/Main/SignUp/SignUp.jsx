import style from './SignUp.module.css';
import SignUpForm from './SignUpForm/SignUpForm';

function SignUp(props){
    // Return XML
    return(
        <section className={style.section}>
            <SignUpForm signUp={props.signUp} dispatch={props.dispatch}/>
        </section>
    );
}

export default SignUp;