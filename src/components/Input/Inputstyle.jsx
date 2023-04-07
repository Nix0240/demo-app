import styled from "styled-components";
export const InputElement = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 25px;

  .error {
    color: red;
    font-weight: 500;
    font-size: 12px;
    padding-top: 2px;
  }

  .input_default {
    /* border: none; */
    font-size: 12px;
    display: flex;
    border-radius: 4px;
    border-collapse: separate;
    padding-inline: 4px;
    padding-block: 2px;
    background-color: #dfdedb;
    cursor: pointer;
    &:focus-within {
      border: 1px solid #ff7f00;
      background-color: #fcfbf7;
    }
  }
  .input_error {
    border: 1px solid red;
    /* font-size: 14px;
    display: flex;
    border-radius: 5px;
    border-collapse: separate;
    padding-inline: 6px;
    padding-block: 4px; */
    &:focus-within {
      border: 1px solid #ff0000;
      background-color: #fcfbf7;
    }
  }

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

export const Inputfield = styled.input`
  border: none;
  height: 35px;
  width: 100%;
  background: transparent;
  outline: none;
  padding: 10px;
  /* border: 1px solid red; */
`;
