import styled from "styled-components";
export const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #e5e5e5;
  width: 100vw;
  padding: 2%;
  overflow-x: hidden;

  .main-container {
    display: flex;
    flex-direction: column-reverse;
  }

  .likeicon {
    cursor: pointer;
  }

  .postList {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    padding-top: 30px;
    padding-bottom: 15px;
    /* identical to box height */
    letter-spacing: 0.5px;
    /* Text/Black */
    color: #222a33;
  }

  .profilePic > img {
    border-radius: 100px;
    height: 68px;
    width: 68px;
  }
  .profileName {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    /* identical to box height, or 144% */
    /* Text/Black */
    color: #222a33;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: fit-content;
    padding: 12px;
    background-color: white;
    border-radius: 8px;
    margin-bottom: 8px;
  }
  .profile {
    display: flex;
    gap: 1%;
  }
  .description {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */

    /* Text/Black */
    color: #222a33;
  }
  .profileData {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    width: 100%;
  }
  .profileContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .timeStamp {
    display: flex;
    gap: 1%;
  }
  .calender {
    display: flex;
    flex-direction: row;
    color: #9494ae;
  }
  .timer {
    color: #9494ae;
  }
  .like {
    color: #9494ae;
  }
  .timeStamp > div {
    display: flex;
  }
  .timeStamp > div > img {
  }
  .postImage {
    display: flex;
    flex-wrap: wrap;
  }
  .postImage > img {
    padding: 5px;
  }
`;
