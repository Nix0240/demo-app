import React, { useRef, useState } from "react";
import { StyledButton } from "../../components/Button/Buttonstyle";
import { ProfileContainer } from "./ProfileStyle";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../components/Input/Input";
import EmailIcon from "../../components/Icon/EmailIcon";
import PhoneIcon from "../../components/Icon/PhoneIcon";
import GenderIcon from "../../components/Icon/GenderIcon";
import SprofileIcon from "../../components/Icon/Sprofile";
import DobIcon from "../../components/Icon/DobIcon";
import { useDispatch, useSelector } from "react-redux";
import RadioMale from "../../components/Radio/RadioMale";
import RadioFemale from "../../components/Radio/RadioFemale";
import { updateUser } from "../../features/Register/userSlice";
import { addAuthhenticUser, removeAuth } from "../../features/Auth/Auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const current = new Date().toISOString().split("T")[0];
  const [file, setFile] = useState([]);
  const { userAuth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fileInputRef = useRef();

  const initialValues = {
    profileImage: userAuth.profileImage,
    firstName: userAuth.firstName,
    lastName: userAuth.lastName,
    email: userAuth.email,
    phone: userAuth.phone,
    dob: userAuth.dob,
    gender: userAuth.gender,
  };

  const onSubmit = (values) => {
    console.log("Form data", values);

    dispatch(updateUser(values));
    dispatch(addAuthhenticUser(values));

    // if (values.email === userAuth.email) {
    //   dispatch(updateUser(values));
    // }
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last name is Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is Required"),
    phone: Yup.number().required("Phone no. is Required"),

    dob: Yup.date().required("DOB is required"),
    // gender: Yup.string().required("Please select any one"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  function handleChange(e) {
    console.log(e.target.files);
    setFile([...file, URL.createObjectURL(e.target.files[0])]);
  }

  const handleClick = () => {
    dispatch(removeAuth());
    navigate("/");
  };
  return (
    <ProfileContainer>
      <div className="header">
        <SprofileIcon width="30px" height="30px" />
        <div>Profile</div>
      </div>
      <div className="content">
        <div className="left_section">
          <div className="imageName">
            <div className="profileImage">
              <img src={userAuth.profileImage} alt="icon" />
            </div>
            <div className="profileName">
              {userAuth.firstName + " " + userAuth.lastName}
            </div>
          </div>
          <div className="profileDataContainer">
            <div className="profileData">
              <div className="email">
                <EmailIcon width="40px" height="16px" />
                <p>{userAuth.email}</p>
              </div>
              <div className="phone">
                <PhoneIcon width="40px" height="20px" />
                <p>{userAuth.phone}</p>
              </div>
              <div className="gender">
                <GenderIcon width="40px" height="25px" />
                <p>{userAuth.gender}</p>
              </div>
              <div className="dob">
                <DobIcon width="40px" height="22px" />
                <p>{userAuth.dob}</p>
              </div>
            </div>
          </div>
          <div className="button">
            <StyledButton
              variant="outlined"
              width="170px"
              height="40px"
              color="#333333"
              border="2px solid #333333"
              onClick={() => navigate("/changepassword")}
            >
              Change password
            </StyledButton>
            <StyledButton
              variant="outlined"
              width="170px"
              height="40px"
              color="#333333"
              border="2px solid #333333"
              onClick={handleClick}
            >
              Logout
            </StyledButton>
          </div>
        </div>
        <div className="right_section">
          <div className="right_section_container">
            <form onSubmit={formik.handleSubmit}>
              <div className="profile">
                <img
                  src={formik.values.profileImage}
                  alt="profile_pic"
                  width="102px"
                  height="102px"
                  style={{ borderRadius: "100px" }}
                />
                <StyledButton
                  onClick={() => fileInputRef.current.click()}
                  variant="outlined"
                  width="140px"
                  height="40px"
                  color="#333333"
                  border="1px solid #333333"
                >
                  Change Image
                </StyledButton>
                <input
                  multiple={false}
                  ref={fileInputRef}
                  type="file"
                  hidden
                  onChange={handleChange}
                />
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
                  type="radio"
                  name="gender"
                  placeholder={"Enter your phone no"}
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                  onBlur={formik.handleBlur}
                  error={formik.touched.gender && formik.errors.gender}
                  errorMsg={formik.errors.gender}
                /> */}
              </div>
              <div className="save_btn">
                <StyledButton variant="register" height="40px" type="submit">
                  SAVE
                </StyledButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
