import styled from "styled-components";
export const TestStyle = styled.div`
  label {
    background-color: indigo;
    color: white;
    padding: 1rem;
    font-family: sans-serif;
    border-radius: 0.3rem;
    cursor: pointer;
    margin-top: 1rem;
  }
`;
export const DateBox = styled.div`
  display: flex;

  .react-datepicker__input-container input {
    display: block !important;
    background-color: blue;
  }

  .react-datepicker-wrapper {
    width: 100% !important;
    background-color: yellow;
  }

  .datePicker {
    width: 100% !important;
    background-color: red;
  }
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  ::-webkit-calendar-picker-indicator {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23bbbbbb" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
  }
`;
