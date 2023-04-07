import styled from "styled-components";
export const DateElement = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 25px;

  input {
    width: 277px;

    height: 40px;
    display: block;
    border: none;
    &:focus-within {
      border: 1px solid #ff7f00;
      background-color: #fcfbf7;
    }
  }

  /* .react-datepicker {
    background: #fcfbf7;
  }
  .react-datepicker__input-container input {
    padding: 15px;
    background-color: #dfdedb;
    outline: none;
    border-radius: 4px;
    width: 278px;
    height: 42px;
    border: none;
    cursor: pointer;
    &:focus-within {
      border: 1px solid #ff7f00;
      background-color: #fcfbf7;
    }
  } */

  label {
    padding-bottom: 3px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    color: #1d1c1d;
  }
`;

/* .error {
    color: red;
    font-weight: 500;
    font-size: 12px;
    padding-top: 2px;
  } */
/* .input_default {
    border: none;
    font-size: 12px;
    display: flex;
    border-radius: 4px;
    border-collapse: separate;
    padding-inline: 4px;
    padding-block: 2px;
    background-color: #dfdedb;
  } */

// export const datefield = styled.input`
//   border: 0;
//   height: 40px;
//   width: 100%;
//   background: transparent;
//   outline: none;
//   padding: 10px;
// `;
