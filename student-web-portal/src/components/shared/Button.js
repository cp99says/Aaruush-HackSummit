import React from "react";
import styles from "./Button.module.scss";

export default function Button({ name, width, backgroundColor, textColor }) {
  return (
    <button
      className={styles.button}
      style={{ width: width, backgroundColor: backgroundColor, color: textColor }}
    >
      {name}
    </button>
  );
}
