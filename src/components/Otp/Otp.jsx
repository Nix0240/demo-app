import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Otpstyle } from "./OtpStyle";

const Otp = () => {
  const [otp, setOtp] = useState("");

  return (
    <Otpstyle>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span></span>}
        renderInput={(props) => <input {...props} />}
        placeholder="0"
        inputStyle="inputStyle"
      />
    </Otpstyle>
  );
};
export default Otp;
