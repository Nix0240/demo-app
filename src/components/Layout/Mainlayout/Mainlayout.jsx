import React from "react";
import Group1 from "../../../assets/Group1.png";
import Dots from "../../../assets/dots.png";
import { LayoutContainer, LeftSection, RightSection } from "./Mainlayoutstyle";

const Mainlayout = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <LeftSection flex={2}>
          <div className="image_cont">
            <img src={Group1} alt="group1" />
          </div>
          <div className="image_dots">
            <img src={Dots} alt="dots" />
          </div>
        </LeftSection>
        <RightSection flex={1}>{children}</RightSection>
      </LayoutContainer>
    </>
  );
};

export default Mainlayout;
