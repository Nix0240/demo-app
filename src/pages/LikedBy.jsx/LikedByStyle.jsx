import styled from "styled-components";
import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
  width: 25rem;
  height: 25rem;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
  border-radius: 12px;
  
  
`;

export const LikedByContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  /* height: 100%; */

  .header {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    background: #2f80ed;
    height: 40px;
    gap: 37%;
    padding: 10px;
    color: white;
    border-radius: 10px 10px 0px 0px;
  }
  p {
    cursor: pointer;
  }
  .likedList {
    display: flex;
    flex-direction: row;
    /* border: 2px solid black; */
    align-items: center;
    gap: 4%;
    padding-top: 20px;
    padding-left: 15px;
  }
  /* .profileImage {
    width: 1px;
  } */
  img {
    width: 40px;
  }
`;
