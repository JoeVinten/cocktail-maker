import React from "react";
import styles from "../../styles/Input.module.css";

const TextInput = (props) => {
  const InputLabel = (
    <label htmlFor={props.name} className={styles.hiddenLabel}>
      {props.label}
    </label>
  );

  const handleChange = (e) => {
    props.onChange(e);
  };
  return (
    <>
      <div className={styles.inputContainer}>
        {props.label && InputLabel}
        <input
          type="text"
          name={props.name}
          className={styles.textInput}
          placeholder={props.placeholder}
          value={props.value}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default TextInput;
