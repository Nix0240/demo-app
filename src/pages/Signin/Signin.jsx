import React from "react";
import { StyledButton } from "../../components/Button/Buttonstyle";
import Input from "../../components/Input/Input";
import {
  ClickInstruct,
  Footer,
  Heading,
  MainHeading,
} from "../../globalStyles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SigninContainer } from "./signinstyle";
import Mainlayout from "../../components/Layout/Mainlayout/Mainlayout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addAuthhenticUser } from "../../features/Auth/Auth";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state);
  // console.log("UI", userInfo);

  const onSubmit = async (values) => {
    // console.log("Form data", values);

    const userExist = userInfo.find(
      (user) => user.email === values.email && user.password === values.password
    );
    if (userExist) {
      // console.log("User logged in succesfully");
      toast("User logged in succesfully");
      await dispatch(addAuthhenticUser(userExist));
      navigate("/postList");
    } else {
      if (userInfo.find((user) => user.email === values.email)) {
        toast("Enter Valid password");
      } else {
        toast("Enter valid username");
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Mainlayout>
      <SigninContainer>
        <div className="welcome_section">
          <MainHeading>Welcome Back!</MainHeading>
          <Heading>Login to your account</Heading>
        </div>

        <form onSubmit={formik.handleSubmit}>
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
          <Input
            label={"Password"}
            name="password"
            type="password"
            placeholder={"Enter your Password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
            errorMsg={formik.errors.password}
          />
          <ClickInstruct>
            <div className="checkbox_container">
              <input type="checkbox" />

              <p>Remember Me</p>
            </div>

            <p onClick={() => navigate("/forgetpassword")}>Forget Password?</p>
          </ClickInstruct>

          <StyledButton
            variant="register"
            height="45px"
            padding="30px"
            type="submit"
          >
            Sign In
          </StyledButton>
          <ToastContainer />
        </form>

        <Footer>
          @2020 All Rights Reserved. Engage Pulse Cookie Preferences, Privacy
          and Terms
        </Footer>
      </SigninContainer>
    </Mainlayout>
  );
};

export default Signin;
