import React from "react";
import { useNavigate } from "react-router-dom";

import { StyledButton } from "../../components/Button/Buttonstyle";
import Seclayout from "../../components/Layout/Mainlayout/Seclayout";
import Otp from "../../components/Otp/Otp";
import {
  ClickInstruct,
  Heading,
  MainHeading,
  Footer,
} from "../../globalStyles";
import { VerificationContainer } from "./VerificationStyle";

function Verification() {
  const navigate = useNavigate();
  return (
    <Seclayout
      showImage={"shield"}
      width={"200px"}
      height={"197px"}
      padding={"80px"}
    >
      <VerificationContainer>
        <div className="container">
          <MainHeading>Verification</MainHeading>
          <Heading>We have sent you OTP on your email address</Heading>
          <div className="sub_container">
            <div className="verfication_otp">
              <Otp />
            </div>
            <div className="resend">
              <ClickInstruct>RESEND</ClickInstruct>
            </div>

            <div className="verify">
              <StyledButton
                onClick={() => navigate("/resetpassword")}
                variant="register"
                height="38px"
              >
                Verify
              </StyledButton>
            </div>
            <div className="change_email">
              <StyledButton
                variant="outlined"
                height="40px"
                color="#ff7f00"
                border="1px solid #ff7f00"
              >
                Change Email
              </StyledButton>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer>
            @2020 All Rights Reserved. Engage Pulse Cookie Preferences, Privacy
            and Terms
          </Footer>
        </div>
      </VerificationContainer>
    </Seclayout>
  );
}

export default Verification;
