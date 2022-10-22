import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import classes from "./Button.module.css";

const Button = ({ direction = "next", disabled, clickHandler }) => {
  let disabledClass = disabled ? classes.disabled : "";

  if (direction === "next") {
    return (
      <button className={`${classes.button} ${disabledClass}`} onClick={clickHandler} disabled={disabled}>
        <FaAngleRight />
      </button>
    );
  }

  return (
    <button className={`${classes.button} ${disabledClass}`} onClick={clickHandler} disabled={disabled}>
      <FaAngleLeft />
    </button>
  );
};

export default Button;
