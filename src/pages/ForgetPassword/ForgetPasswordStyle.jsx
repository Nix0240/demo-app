import styled from "styled-components";

export const ForgetPasswordContainer = styled.div`
  padding: 10%;
  width: 65%;
  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .email_btn {
    width: 70%;
  }
  .reset {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 5%;
  }
  .footer {
    position: absolute;
    bottom: 20px;
  }
`;
