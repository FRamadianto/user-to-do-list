import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersLIst from "./components/Users/UsersLIst";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (nameUser, ageUser) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: nameUser, age:ageUser, id:Math.random().toString()}]
    })
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersLIst users={usersList} />
    </div>
  );
}

export default App;
