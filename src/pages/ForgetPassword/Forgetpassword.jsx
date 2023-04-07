import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";

import { StyledButton } from "../../components/Button/Buttonstyle";
import Input from "../../components/Input/Input";
import Seclayout from "../../components/Layout/Mainlayout/Seclayout";
import {
  ClickInstruct,
  Footer,
  Heading,
  MainHeading,
} from "../../globalStyles";

import { ForgetPasswordContainer } from "./ForgetPasswordStyle";

const initialValues = {
  email: "",
};

const onSubmit = (values) => {
  console.log("Form Data", values);
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
});

function Forgetpassword() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const navigate = useNavigate();

  return (
    <Seclayout
      showImage={"shield"}
      width={"200px"}
      height={"197px"}
      padding={"80px"}
    >
      <ForgetPasswordContainer>
        <div className="container">
          <MainHeading>Forgot password?</MainHeading>
          <Heading>
            Please enter your registered email address we'll send you reset
            instruction
          </Heading>
          <div className="email_btn">
            <div className="fp_email">
              <Input
                label={"Email"}
                name="email"
                placeholder={"Enter mail id"}
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email}
                errorMsg={formik.errors.email}
              />
              <div className="reset">
                <ClickInstruct>
                  <p onClick={() => formik.resetForm()}>Reset</p>
                </ClickInstruct>
              </div>
            </div>
            <div className="send_button">
              <StyledButton
                onClick={() => navigate("/verification")}
                variant="register"
                height="40px"
              >
                Send
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
      </ForgetPasswordContainer>
    </Seclayout>
  );
}

export default Forgetpassword;
