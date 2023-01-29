import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [inputUserName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (inputUserName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non empty string)",
      });
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ",
      });
      return;
    }
    props.onAddUser(inputUserName, inputAge);
    setInputName("");
    setInputAge("");
  };
  const usernameHandler = (e) => {
    setInputName(e.target.value);
  };
  const ageHandler = (e) => {
    setInputAge(e.target.value);
  };
  const errorHandler = () => {
    setError(null)
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card clasCSS={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={inputUserName}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Ages</label>
          <input
            id="age"
            type="number"
            value={inputAge}
            onChange={ageHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
