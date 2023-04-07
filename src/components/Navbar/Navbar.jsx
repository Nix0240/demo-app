import React from "react";
import { Nav } from "./Navbarstyle";
import logo from "../../assets/logo.png";
import StyledButton from "../Button/Button";
import { useNavigate } from "react-router-dom";

import SSprofileIcon from "../Icon/SSprofile";
import { useSelector } from "react-redux";

const Navbar = ({ type }) => {
  // console.log("typenav", type);
  const navigate = useNavigate();
  const { userAuth } = useSelector((state) => state);
  // console.log("In the nav bar", userAuth);
  return (
    <>
      <Nav>
        <div className="Logo">
          <img src={logo} alt="logo" onClick={() => navigate("/")} />
        </div>
        <div className="Btn_container">
          {type === "public" ? (
            <>
              <StyledButton
                onClick={() => navigate("/")}
                width="120px"
                height="40px"
                variant="login"
              >
                Login
              </StyledButton>
              <StyledButton
                onClick={() => navigate("register")}
                width="120px"
                height="40px"
                variant="register"
              >
                Register
              </StyledButton>
            </>
          ) : (
            <>
              {/* {console.log("hello")} */}
              <StyledButton
                onClick={() => navigate("/createpost")}
                width="120px"
                height="40px"
                variant="login"
              >
                Create Post
              </StyledButton>
              <div className="profile">
                <div className="ssprofileicon">
                  <SSprofileIcon width="28px" height="28px" />
                </div>
                <div className="profileName">
                  <span onClick={() => navigate("/profile")}>
                    {userAuth.firstName + " " + userAuth.lastName}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
