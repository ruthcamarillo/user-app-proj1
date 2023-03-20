import React, { useState } from 'react';
//the useState is gonna help us keep info from the user input, 
// allows you to add state to a functional component. State is like a memory that your component can use to remember things, like when button has been clicked
//a hook- a hook is a special function that allows you to use React features like state (useStae)
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

// we must import all new js files to have them work

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    //js syntax, array destructuring, useState always returns am array with TWO elements, 
    //with this syntaxt we are pulling these elements out of that returned array and making two variabls
    //enteredUsername current  state snapchot (will hold whats added)
    //setEnteredUsername holds a function we call to change that state
    const [error, setError] = useState();



    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name an age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        //pointing at AddUserHandler in App.js - we are executing this funtion here
        setEnteredUsername('');
        setEnteredAge('');
    };
    // event.preventDefault allows us to stop the regular processes of the browser so we can use our code instead

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />

                    <Button type="submit">Add User</Button>

                </form>
            </Card>
        </div>
    );
};

export default AddUser;