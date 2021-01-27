import React from 'react';
import { TextField } from '@fluentui/react';
import './List.css';

const emailTextField = () => {
    return (
        <div style={{display:'flex', alignItems:'center'}}>
           <TextField
            className={'textfield-width'} 
            borderless={false}
           />
           <span style={{marginLeft: '2px'}}>
            {`  @gmail.com`} 
           </span>
        </div>
    )
}

export default emailTextField;
