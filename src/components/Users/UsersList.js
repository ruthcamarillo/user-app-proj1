import React from 'react';

import Card from '../UI/Card';
import classes from './UserList.module.css';
//adding the styling with our css module

const UsersList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id} >
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};
//UsersList receives the "users" prop as a parameter and uses it to render a list of users.
//AddUser form is out of reach not connected! Child components cant communicate

export default UsersList;