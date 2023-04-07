import styled from "styled-components";

export const CreatePostContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 30px;
  padding-top: 40px;
  padding-bottom: 12px;
  background: #e5e5e5;

  flex-direction: column;
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    /* width: 870px; */
    justify-content: space-between;

    /* margin: 10px; */
  }

  .postHeading {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height */
    letter-spacing: 0.5px;
    /* Text/Black */
    color: #222a33;
  }
  .descriptionBox {
    margin: 0;
    padding-bottom: 0px;
  }
  .description {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    letter-spacing: 0.25px;

    /* Text/gray2 */

    color: #5e6367;
  }
  .addMediaBtn {
    display: flex;
    flex-direction: row;
    width: 20%;
    padding-top: 3%;
  }
  .createPostBtn {
    display: flex;
    justify-content: flex-start;
    padding-left: 12%;
    padding-top: 3%;
  }
  .imageField {
    display: flex;
    flex-direction: row;
    gap: 1%;
    padding-top: 15px;
    flex-wrap: wrap;
  }

  img {
    height: auto;
    width: 100%;
  }

  .text_box {
    display: flex;
    height: auto;
    width: 50vw;
  }

  textarea {
    overflow: hidden;
    resize: none;
    border-radius: 4px;
    border: 1px solid #979797;
    &:focus {
      outline: none;
      border: 1px solid #ff7f00;
      background-color: #fcfbf7;
    }
  }

  .deleteBtn {
    float: center;
    position: absolute;
    color: white;
  }
`;
