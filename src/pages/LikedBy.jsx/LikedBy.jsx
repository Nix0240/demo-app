import React, { useState } from "react";
import styled from "styled-components";
import { BaseModalBackground, ModalProvider } from "styled-react-modal";
import { LikedByContainer, StyledModal } from "./LikedByStyle";

import profile from "../../assets/profile.png";
import { useSelector } from "react-redux";

const LikedBy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const { userPost } = useSelector((state) => state);

  // const likesArray = { userPost };

  // const items = likesArray.map((item) => {
  //   return item.email;
  // });
  // console.log("likesss", items);

  function toggleModal(e) {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }
  const FadingBackground = styled(BaseModalBackground)`
    opacity: ${(props) => props.opacity};
    transition: all 0.3s ease-in-out;
  `;
  return (
    <div>
      <ModalProvider backgroundComponent={FadingBackground}>
        <button onClick={toggleModal}>Open modal</button>
        <StyledModal
          isOpen={isOpen}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
          opacity={opacity}
          backgroundProps={{ opacity }}
        >
          <LikedByContainer>
            <div className="header">
              <div>Liked by</div>
              <p className="colsetag" onClick={toggleModal}>
                X
              </p>
            </div>
            {/* {console.log("liked by user", userPost[0].likes[0])} */}

            {userPost.likes?.map((item, id) => (
              <div className="likedList">
                <div>
                  <img
                    classname="profileImage"
                    src={item.profileImage}
                    alt="pic"
                    key={id}
                  />
                </div>
                <div>
                  <p>{item.firstName + " " + item.lastName}</p>
                </div>
              </div>
            ))}
          </LikedByContainer>
        </StyledModal>
      </ModalProvider>
    </div>
  );
};

export default LikedBy;
