import React from 'react'
import { DetailsList, TextField } from '@fluentui/react'
import EmailTextField from './emailTextField';
import PwdTextField from './pwdTextField';

import './List.css'

const List = ({location}) => {
    
    const searchParams = new URLSearchParams(location.search);
    const filterParam = searchParams.get('email');
    console.log(filterParam,'check')

    const userData = [
        {
            name: 'Abhijeet Mukherjee',
            email: 'abhijeet@example.com',
            password: '123'
        },
        {
            name: 'John Doe',
            email: 'john@example.com',
            password: '123'
        },
        {
            name: 'Jane Doe',
            email: 'jane@example.com',
            password: '123'
        }
];
    const columns = [
        // {
        //   key: 'column1',
        //   name: 'File Type',
        //   ariaLabel: 'Column operations for File type, Press to sort on File type',
        //   fieldName: 'name',
        //   minWidth: 16,
        //   maxWidth: 16,
        //   onRender: (item) => {
        //     return <div>Hi there</div>;
        //   },
        // },
        {
            key: 'column1',
            name: 'Display name',
            fieldName: 'name',
            minWidth: 210,
            maxWidth: 350,
            isRowHeader: true,
            isResizable: true,
            isSorted: true,
            isSortedDescending: false,
            sortAscendingAriaLabel: 'Sorted A to Z',
            sortDescendingAriaLabel: 'Sorted Z to A',
            //onColumnClick: this._onColumnClick,
            data: 'string',
            isPadded: true,
            onRender: function(item){
                return <div>{item.name}</div>
            }
          },{
            key: 'column2',
            name: 'Source email',
            fieldName: 'email',
            minWidth: 210,
            maxWidth: 350,
            isRowHeader: true,
            isResizable: true,
            // isSorted: true,
            // isSortedDescending: false,
            // sortAscendingAriaLabel: 'Sorted A to Z',
            // sortDescendingAriaLabel: 'Sorted Z to A',
            //onColumnClick: this._onColumnClick,
            data: 'string',
            isPadded: true,
            onRender: function(){
                return (
                    // <TextField 
                    //     className={'textfield-width'} 
                    //     borderless={false}
                    //     />
                    <EmailTextField />
                )
            }
          },{
            key: 'column3',
            name: 'Password',
            fieldName: 'password',
            minWidth: 210,
            maxWidth: 350,
            isRowHeader: true,
            isResizable: true,
            // isSorted: true,
            // isSortedDescending: false,
            // sortAscendingAriaLabel: 'Sorted A to Z',
            // sortDescendingAriaLabel: 'Sorted Z to A',
            //onColumnClick: this._onColumnClick,
            data: 'string',
            isPadded: true,
            onRender: function(){
                return <PwdTextField />
            }
          },
    ];

    return (
        <DetailsList 
            items={userData}
            columns={columns}
        />
    )
}

export default List
