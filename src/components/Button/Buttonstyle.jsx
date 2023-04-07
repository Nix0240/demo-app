import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) =>
    props.variant === "register"
      ? "#ff7f00"
      : props.variant === "outlined"
      ? "transparent"
      : "#242F3A"};
  color: white;

  border: ${(props) =>
    props.variant === "login" ? "2px solid #FFFFFF" : "none"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  margin-top: ${(props) => props.padding || "0"};
  border-radius: 4px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;

  /* color: #ff7f00;
  border: 1px solid #ff7f00; */
  color: ${(props) => props.color || "100%"};
  border: ${(props) => props.border || "100%"};

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  label {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    padding: 10px;
  }
`;

// export const TransparentButton = styled(StyledButton)`
//   border-radius: 4px;
//   background-color: transparent;
//   /* color: #ff7f00;
//   border: 1px solid #ff7f00; */
//   color: ${(props) => props.color || "100%"};
//   border: ${(props) => props.border || "100%"};
// `;
