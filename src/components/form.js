import React, { useState } from "react";
import styles from "./styles.module.css";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  
  

  return (
    <form >
      <div >
        <label>First Name: </label>
        <input type="text" className={styles.bar} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div >
        <label>Last Name: </label>
        <input type="text" className={styles.bar} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div >
        <label>Email: </label>
        <input type="text" className={styles.bar} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div >
        <label>Password: </label>
        <input type="password" className={styles.bar} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div >
        <label>confirm Password: </label>
        <input
          type="password" className={styles.bar}
          onChange={(e) => setConfPassword(e.target.value)}
        />
      </div>
      <input type="submit" id={styles.sub} value="Submit" />
      <div>
          <h1>Your form Data</h1>
            first Name: {firstName} <br/>
            Last Name: {lastName}<br></br>
            email: {email}<br/>
            password: {password}<br/>
            confirm Password: {confPassword}
          
      </div>
    </form>
  );
}
export default UserForm
