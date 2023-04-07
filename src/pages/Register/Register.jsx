import React, { useRef, useState } from "react";
import { RegisterContainer } from "./RegisterStyle";
import { StyledButton } from "../../components/Button/Buttonstyle";
import Input from "../../components/Input/Input";
import { Footer, Heading, MainHeading } from "../../globalStyles";
import Seclayout from "../../components/Layout/Mainlayout/Seclayout";
import { useFormik } from "formik";
import * as Yup from "yup";

import eyeIcon from "../../assets/eye.png";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../../features/Register/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RadioMale from "../../components/Radio/RadioMale";
import RadioFemale from "../../components/Radio/RadioFemale";

const validationSchema = Yup.object({
  profileImage: Yup.mixed().nullable().required("Required Field"),
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last name is Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),
  phone: Yup.number().required("Phone no. is Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  // .required("No password provided.")
  // .min(8, "Password is too short - should be 8 chars minimum.")
  // .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  dob: Yup.date().required("DOB is required"),
  // gender: Yup.string().required("Please select any one"),
});

// console.log("Hello");

const Register = () => {
  const [file, setFile] = useState([]);
  const current = new Date().toISOString().split("T")[0];
  const fileInputRef = useRef(null);

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state);

  // console.log("UI", userInfo);

  const initialValues = {
    profileImage: "[]",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
  };

  const onSubmit = (values) => {
    // console.log("Value of alldata", values);
    const userExist = userInfo.find((user) => user.email === values.email);

    if (!userExist) {
      dispatch(addUserData(values));
      toast("User registered Success");
      formik.resetForm();
    } else {
      toast.error("User already exist!");
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = async (event) => {
    // console.log(event.target.files);
    if (event.target.files.length) {
      const imgfile = event.target.files[0];
      const base64 = await convertToBase64(imgfile);
      formik.setFieldValue("profileImage", base64);
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  // console.log("file", formik);

  return (
    <Seclayout showImage={"register"}>
      <input
        multiple={false}
        ref={fileInputRef}
        type="file"
        hidden
        onChange={handleChange}
      />
      <RegisterContainer>
        <div className="Container">
          <div className="create_account">
            <MainHeading>Create your account</MainHeading>
            <Heading>We need some details to setup your account</Heading>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="profile">
              <img
                src={file}
                alt="pic"
                width="102px"
                height="102px"
                style={{ border: "2px solid #979797", borderRadius: "100px" }}
              />
              <StyledButton
                type="button"
                onClick={handleFileUpload}
                variant="outlined"
                width="140px"
                height="40px"
                color="#333333"
                border="2px solid #333333"
                // name="profileImage"
                // value={formik.values.profileImage}
                // onBlur={formik.handleBlur}
                // error={
                //   formik.touched.profileImage && formik.errors.profileImage
                // }
                // errorMsg={formik.errors.profileImage}
              >
                Upload Image
              </StyledButton>
            </div>

            <div className="name_field">
              <Input
                label={"First Name*"}
                name="firstName"
                placeholder={"Enter your first name"}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && formik.errors.firstName}
                errorMsg={formik.errors.firstName}
              />
              <Input
                label={"Last Name*"}
                name="lastName"
                placeholder={"Enter your last name"}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && formik.errors.lastName}
                errorMsg={formik.errors.lastName}
              />
            </div>
            <div className="email_phone">
              <Input
                label={"Email*"}
                name="email"
                placeholder={"Enter mail id"}
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email}
                errorMsg={formik.errors.email}
              />
              <Input
                label={"Phone*"}
                name="phone"
                type="number"
                placeholder={"Enter your phone no"}
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && formik.errors.phone}
                errorMsg={formik.errors.phone}
              />
            </div>
            <div className="password">
              <Input
                label={"Password*"}
                name="password"
                type="password"
                placeholder={"Enter your Password"}
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password}
                errorMsg={formik.errors.password}
                icon={eyeIcon}
              />
              <Input
                label={"Confirm Password*"}
                name="confirmPassword"
                placeholder={"Enter your password"}
                type="password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
                errorMsg={formik.errors.confirmPassword}
              />
            </div>
            <div className="dob_gender">
              <Input
                label={"Date of Birth*"}
                name="dob"
                type="date"
                max={current}
                placeholder={"Select Date"}
                onChange={formik.handleChange}
                value={formik.values.dob}
                onBlur={formik.handleBlur}
                error={formik.touched.dob && formik.errors.dob}
                errorMsg={formik.errors.dob}
              />
              {/* <div>
                <input
                  id="male"
                  type="radio"
                  value="male"
                  name="gender"
                  onChange={formik.handleChange}
                  defaultChecked={formik.values.gender === "male"}
                />
                <label htmlFor="male">Male</label>
                <input
                  id="female"
                  type="radio"
                  value="female"
                  name="gender"
                  onChange={formik.handleChange}
                  defaultChecked={formik.values.gender === "female"}
                />
                <label htmlFor="female">Female</label>
              </div> */}

              <div className="gender_element">
                <div className="gender_label">Gender</div>
                <div className="radio_btn">
                  <RadioMale
                    id="male"
                    type="radio"
                    value="male"
                    name="gender"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.gender === "male"}
                  />
                  <RadioFemale
                    id="female"
                    type="radio"
                    value="female"
                    name="gender"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.gender === "female"}
                  />
                </div>
              </div>

              {/* <Radio
                label={"Gender"}
                name="gender"
                
                onChange={formik.handleChange}
                value={formik.values.gender}
                onBlur={formik.handleBlur}
                error={formik.touched.gender && formik.errors.gender}
                errorMsg={formik.errors.gender}
                defaultChecked={formik.values.gender}
              /> */}
            </div>

            <div className="terms_radio">
              <input type="radio" value="agree" />
              <label>I agree to the terms of services</label>
            </div>
            <div className="register_footer">
              <div className="register_btn">
                <StyledButton variant="register" height={"40px"} type="submit">
                  Get Started
                </StyledButton>
                <ToastContainer />
              </div>
              <div className="r_footer">
                <Footer>
                  @2020 All Rights Reserved. Engage Pulse Cookie Preferences,
                  Privacy and Terms
                </Footer>
              </div>
            </div>
          </form>
        </div>
      </RegisterContainer>
    </Seclayout>
  );
};

export default Register;
