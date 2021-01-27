import React, {useState} from 'react';
import { TextField, Icon } from '@fluentui/react';
import './List.css';

const PwdTextField = () => {

    const [message, setMessage] = useState('');

    const changeHandler = e => {
        setMessage(e.target.value);
    }

    return (
        <div style={{display:'flex', alignItems:'center'}}>
           <TextField
            className={'textfield-width'} 
            type={'password'}
            onChange={changeHandler}
           />
           {
               message.length < 6 ? <span style={{marginLeft:'2px'}}>Warning:too short</span> : ''
           }
        </div>
    )
}

export default PwdTextField;
