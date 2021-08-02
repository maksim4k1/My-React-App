import React from 'react';
import { editInputValueCreateAction } from '../../../../../redux/state';
import style from './SignInInput.module.css';

function SignInInput(props){
    const input = React.createRef();

    function changeValue(){
        props.dispatch(editInputValueCreateAction("signInPage", props.value, input.current.value));
    }

    // Return XML
    return(
        <label className={style.label}>
            <span>{props.labelText}</span>
            <input type={props.type} className={style.input} value={props.signIn[props.value]} onChange={changeValue} ref={input} />
        </label>
    );
}

export default SignInInput;