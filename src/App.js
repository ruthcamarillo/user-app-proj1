import React, { useState } from 'react';
// we are going to lift the state management up to App component, we do this in App component because thats the one componenet above both AddUser and UsersList (has access to both)
// we are gonna merge our users array here

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
//parent-to-child communication happening with the UsersList component.
//App component is passing a prop called users to the UsersList component.

function App() {
  const [usersList, setUsersList] = useState([]);
  //we have a function that allows us to change to the array and then that change will cause the App component to be redered, this has th UsersList component be updated as well

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
//props is coming from mUsersList.js, the error says its coming back undefined if I dont tdo this (not an array to map)
