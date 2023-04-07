import React from "react";
import Input from "../../components/Input/Input";
import { ResetContainer } from "./resetStyle";
import { StyledButton } from "../../components/Button/Buttonstyle";
import { Footer, Heading, MainHeading } from "../../globalStyles";
import Seclayout from "../../components/Layout/Mainlayout/Seclayout";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  password: "",
  confirmPassword: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

function Resetpassword() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Seclayout
      showImage={"shield"}
      width={"200px"}
      height={"197px"}
      padding={"80px"}
    >
      <ResetContainer>
        <div className="reset_password_main_container">
          <div className="reset_password_secondary_container">
            <MainHeading>Reset password?</MainHeading>
            <Heading>Please enter your new password.</Heading>
            <div className="container">
              <Input
                label={"New Password"}
                type="password"
                name="password"
                placeholder={"Enter your password"}
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password}
                errorMsg={formik.errors.password}
              />
              <Input
                label={"Confirm Password"}
                type="password"
                name="confirmPassword"
                placeholder={"Enter your password"}
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
                errorMsg={formik.errors.confirmPassword}
              />
              <div className="send_button">
                <StyledButton variant="register" height="40px">
                  Save
                </StyledButton>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer>
            @2020 All Rights Reserved. Engage Pulse Cookie Preferences, Privacy
            and Tearms
          </Footer>
        </div>
      </ResetContainer>
    </Seclayout>
  );
}

export default Resetpassword;
