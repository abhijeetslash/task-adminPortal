import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DetailsList, TextField } from '@fluentui/react'
import { listUsers } from '../redux/actions/userActions'

import EmailTextField from './emailTextField';
import PwdTextField from './pwdTextField';

import './List.css'

const List = ({location}) => {

    const dispatch = useDispatch();
    const userList = useSelector(state => state.userList)

    const { users } = userList;
    
    const searchParams = new URLSearchParams(location.search);
    const filterParam = searchParams.get('email');
    console.log(filterParam,'check filter param from List component')

    useEffect(() => {
        dispatch(listUsers(filterParam));
        // eslint-disable-next-line
    },[dispatch, filterParam])

    const columns = [
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
            data: 'string',
            isPadded: true,
            onRender: function(item){
                return (
                    <EmailTextField email={item.email}/>
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
            items={users}
            columns={columns}
        />
    )
}

export default List
