import React from 'react';
import { editInputValueCreateAction } from "../../../../../redux/other-reducer";
import style from './SignUpInput.module.css';

function SignUpInput(props){
    const input = React.createRef();

    function changeValue(){
        props.dispatch(editInputValueCreateAction("signUpPage", props.value, input.current.value));
    }

    // Return XML
    return(
        <label className={style.label}>
            <span>{props.labelText}</span>
            <input type={props.type} className={style.input} value={props.signUp[props.value]} onChange={changeValue} ref={input} />
        </label>
    );
}

export default SignUpInput;