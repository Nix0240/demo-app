import React from "react";
import { InputRadio } from "./RadioStyle";

const RadioFemale = ({ ...rest }) => {
  return (
    <InputRadio>
      <input {...rest} />
      <label>Female</label>
    </InputRadio>
  );
};

export default RadioFemale;
