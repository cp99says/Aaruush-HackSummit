import React from "react";
import styles from "./Navbar.module.scss";

import logo from "assets/logo.png";

import Button from "components/shared/Button";
import { colors } from "components/shared/colors";

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.maxWidthContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.links}>
          <p>Home</p>
          <p>About</p>
          <p>Team</p>
        </div>
        <div className={styles.controllers}>
          <button className={styles.login}>Login</button>
          <Button
            name="Sign Up"
            width="150px"
            backgroundColor={colors.PRIMARY}
            textColor={colors.PEACH}
          />
        </div>
      </div>
    </div>
  );
}
