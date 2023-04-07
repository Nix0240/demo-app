import styled from "styled-components";

export const Otpstyle = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: auto;
  align-items: center;

  .inputStyle {
    outline: none;

    width: 45% !important;
    height: 45px;
    border-radius: 2px;
    border: 0px;
    margin: 15px;
    background: #dddddd;
    font-size: 20px;
    &:focus-within {
      border: 1px solid #ff7f00;
      background-color: #fcfbf7;
    }
  }
`;
