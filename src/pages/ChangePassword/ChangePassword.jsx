import React from "react";
import { Footer, Heading, MainHeading } from "../../globalStyles";
import { ChangePasswordContainer } from "./ChangePasswordStyle";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input/Input";
import { StyledButton } from "../../components/Button/Buttonstyle";

const initialValues = {
  oldpassword: "",
  newpassword: "",
  confirmPassword: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  oldpassword: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  newpassword: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const ChangePassword = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <ChangePasswordContainer>
      <div className="container">
        <div className="sub_container">
          <div className="header">
            <MainHeading>Change Password</MainHeading>
            <Heading>Please enter your new password.</Heading>
          </div>

          <div className="password">
            <Input
              label={"Old Password"}
              type="password"
              name="oldpassword"
              placeholder={"Enter your password"}
              onChange={formik.handleChange}
              value={formik.values.oldpassword}
              onBlur={formik.handleBlur}
              error={formik.touched.oldpassword && formik.errors.oldpassword}
              errorMsg={formik.errors.oldpassword}
            />
            <Input
              label={"New Password"}
              type="password"
              name="newpassword"
              placeholder={"Enter your password"}
              onChange={formik.handleChange}
              value={formik.values.newpassword}
              onBlur={formik.handleBlur}
              error={formik.touched.newpassword && formik.errors.newpassword}
              errorMsg={formik.errors.newpassword}
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
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              errorMsg={formik.errors.confirmPassword}
            />
          </div>

          <StyledButton variant="register" height="40px">
            Save
          </StyledButton>
        </div>

        <Footer>
          @2020 All Rights Reserved. Engage Pulse Cookie Preferences, Privacy
          and Terms
        </Footer>
      </div>
    </ChangePasswordContainer>
  );
};

export default ChangePassword;
