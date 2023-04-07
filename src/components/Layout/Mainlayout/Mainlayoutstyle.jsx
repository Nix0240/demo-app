import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 50px);
`;

export const LeftSection = styled.div`
  background: #2f80ed;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  justify-content: ${(props) => props.justify || "center"};
  align-items: center;
  /* flex: 2; */
  flex: ${(props) => props.flex || "auto"};
  img {
    height: auto;
    width: 100%;
    display: flex;
  }

  .dummy_text {
    padding: 50px;
    padding-top: 100px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    color: #ffffff;
  }
`;
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  /* flex: 1; */
  flex: ${(props) => props.flex || "auto"};
`;
