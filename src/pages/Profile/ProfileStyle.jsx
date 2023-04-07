import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  padding: 8px;
  width: 100vw;
  background: #e5e5e5;
  flex-direction: column;
  gap: 6px;
  .header {
    display: flex;
    align-items: center;
    background: white;
    gap: 0.5%;
    padding: 10px;
  }

  .content {
    display: flex;
    height: 100%;
    gap: 6px;
  }
  .profileImage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* padding-top: 40px; */
  }
  .profileImage > img {
    width: 102px;
    height: 102px;
    border-radius: 100px;
  }
  .profileName {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }
  .profileDataContainer {
    display: flex;
    justify-content: center;
  }

  .profileData {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 140px;
  }
  .email {
    display: flex;
    align-items: center;
  }

  p {
    color: #5e6367;
  }

  .phone {
    display: flex;
    align-items: center;
  }
  .gender {
    display: flex;
    align-items: center;
  }
  .dob {
    display: flex;
    align-items: center;
  }
  .left_section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: white;
  }
  .right_section {
    flex: 3;
    padding: 20px;
    background: white;
  }
  .button {
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 20px;
  }
  .right_section_container {
    display: flex;
    flex-direction: column;
    padding-right: 10%;
  }
  .profile {
    display: flex;

    align-items: center;
    gap: 5%;
    padding-bottom: 3%;
  }

  .name_field {
    display: flex;
    flex-direction: row;

    gap: 5%;
  }
  .email_phone {
    display: flex;
    justify-content: space-between;
    gap: 5%;
  }
  .password {
    display: flex;
    gap: 5%;
  }
  .dob_gender {
    display: flex;
    gap: 5%;
  }
  .save_btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 47.5%;
  }
  .gender_element {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .gender_label {
    padding-bottom: 3px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    color: #1d1c1d;
  }

  .radio_btn {
    display: flex;

    /* justify-content: center;
    align-items: center; */
    border-radius: 4px;

    /* border-collapse: separate; */
    /* padding-inline: 4px; */

    justify-content: flex-start;

    padding-top: 4%;
  }
`;
