import styled from "styled-components";

export const Nav = styled.nav`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background: #242f3a;
  justify-content: space-between;
  align-items: center;

  .Btn_container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    gap: 6%;
  }
  .Logo {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
  }
  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 120px;
    gap: 5px;
  }
  .profileName {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;

    /* Text/white */

    color: #ffffff;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  .ssprofileicon {
    display: flex;
  }
`;
