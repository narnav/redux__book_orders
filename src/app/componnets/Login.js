import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginAsync, selectlogged } from "../Slicers/loginSlice";
import styles from "./Counter.module.css";

export function Login() {
  const logged = useSelector(selectlogged);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("itay");
  const [password, setPassword] = useState("123");

  return (
    <div>
      <div className={styles.row}>
        UserName:
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        Password:
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        {logged ? (
          <div>
            <button
              onClick={() => dispatch(loginAsync({ username, password }))}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => dispatch(loginAsync({ username, password }))}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
