import React from 'react';
import { editInputValueCreateAction } from '../../../../../../redux/state';
import style from './EditProfileModalInput.module.css';

function EditProfileModalInput(props){
    const input = React.createRef();

    function changeValue(){
        props.dispatch(editInputValueCreateAction("profilePage", props.value, input.current.value));
    }

    // Return XML
    return(
        <label className={style.label}>
            <span>{props.labelText}</span>
            <input type={props.type} className={style.input} onChange={changeValue} value={props.profile[props.value]} ref={input} />
        </label>
    );
}

export default EditProfileModalInput;