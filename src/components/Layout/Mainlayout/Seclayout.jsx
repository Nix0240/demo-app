import React from "react";

import registerImage from "../../../assets/Group_reg.png";
import verImage from "../../../assets/Group_ver.png";

import { LayoutContainer, LeftSection, RightSection } from "./Mainlayoutstyle";
const imgToShow = {
  register: registerImage,
  shield: verImage,
};
const Seclayout = ({ children, showImage }) => {
  return (
    <LayoutContainer>
      <LeftSection flex={"1"} justify={"space-between"}>
        <div className="dummy_text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="image_group">
          <img src={imgToShow[showImage]} alt="group" />
        </div>
      </LeftSection>
      <RightSection flex={"2"}>{children}</RightSection>
    </LayoutContainer>
  );
};

export default Seclayout;
