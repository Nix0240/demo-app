import React from "react";
import { InputRadio } from "./RadioStyle";

const Radio = ({ label, error, errorMsg, ...rest }) => {
  return (
    <InputRadio>
      <label htmlFor="name">{label}</label>
      <div className="input_default">
        <div className="male">
          <label>Male</label>
          <input {...rest} />
        </div>
        <div className="female">
          <label>Female</label>
          <input {...rest} />
        </div>
      </div>

      {!!error && <div className="error">{errorMsg}</div>}
    </InputRadio>
  );
};

export default Radio;

// import React from "react";
// import { InputElement, Inputfield } from "./Inputstyle";

// function Input({ label, error, errorMsg, ...rest }) {
//   return (
//     <InputElement>
//       <label htmlFor="name">{label}</label>
//       <div className="input_default">
//         <Inputfield {...rest} />
//       </div>

//       {!!error && <div className="error">{errorMsg}</div>}
//     </InputElement>
//   );
// }

// export default Input;
