import React from "react";

import classes from "./Login.module.css";
import { loginUrl } from "../../logic/spotify";

function Login() {
  return (
    <div className={classes.login}>
      <img
        className={classes.logo}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={loginUrl} className={classes.link}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
