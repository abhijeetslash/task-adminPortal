import React from 'react';
import { TextField } from '@fluentui/react';
import './List.css';

const emailTextField = ({email}) => {

    const address = email.split('@')[1]

    return (
        <div style={{display:'flex', alignItems:'center'}}>
           <TextField
            className={'textfield-width'} 
            borderless={false}
           />
           <span style={{marginLeft: '2px'}}>
            {`@${address}`} 
           </span>
        </div>
    )
}

export default emailTextField;
