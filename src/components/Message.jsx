import React from "react";
import styles from "./Message.module.css";

export default function Message({ message }) {
  return (
    <div className={styles.message}>
      <span role="img">👋</span> {message}
    </div>
  );
}
