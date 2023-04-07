import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        ::-webkit-scrollbar {
  display: none;
}
    }
`;

export const Container = styled.div`
  width: 100%;

  /* max-width: 100%; */

  padding: 0 50px;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const MainHeading = styled.h1`
  /* font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  width: 100%;
  letter-spacing: 4px;
  text-align: center; */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */
  color: #1d1c1d;
`;

export const Heading = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 140% */
  color: #8f9bb3;
`;

export const ClickInstruct = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height, or 154% */

  color: #ff7f00;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const Footer = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 20px;
  color: #9494ae;
`;

export default GlobalStyle;
