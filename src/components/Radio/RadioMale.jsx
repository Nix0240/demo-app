import React from "react";
import { InputRadio } from "./RadioStyle";

const RadioMale = ({ ...rest }) => {
  return (
    <InputRadio>
      <input {...rest} />
      <label>Male</label>
    </InputRadio>
  );
};

export default RadioMale;
