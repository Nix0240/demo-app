import styled from "styled-components";
export const VerificationContainer = styled.div`
  padding: 10%;
  height: calc(100vh-50px);
  width: 70%;
  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    flex-direction: column;
  }
  .sub_container {
    padding-top: 7%;
    display: flex;
    flex-direction: column;
    width: 70%;
  }
  .resend {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 10%;
  }
  .change_email {
    padding-top: 30px;
  }

  .footer {
    position: absolute;
    bottom: 20px;
  }
`;
