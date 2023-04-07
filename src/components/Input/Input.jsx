import React from "react";
import { InputElement, Inputfield } from "./Inputstyle";
import { clsx } from "clsx";

function Input({ label, error, errorMsg, ...rest }) {
  console.log("placeholder", rest);

  return (
    <InputElement>
      <label htmlFor="name">{label}</label>
      <div className={clsx("input_default", !!error && "input_error")}>
        <Inputfield {...rest} />
        {/* <img src={icon} /> */}
      </div>

      {!!error && <div className="error">{errorMsg}</div>}
    </InputElement>
  );
}

export default Input;
