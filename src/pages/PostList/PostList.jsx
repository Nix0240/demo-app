import React, { useEffect } from "react";
import { PostListContainer } from "./PostListStyle";
import PostListCalender from "../../components/Icon/PostListCalender";
import Timer from "../../components/Icon/Timer";
import LikeIcon from "../../components/Icon/LikeIcon";
import MoreIcon from "../../components/Icon/MoreIcon";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { likedBy } from "../../features/CreatePost";

const PostList = () => {
  const { userPost, userAuth } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("User post", userPost);

  const handleClick = (id) => {
    dispatch(likedBy({ id, ...userAuth }));
  };

  // useEffect(() => {
  //   console.log("useEffect", userPost);
  // }, [userPost]);

  const isLiked = (items) => {
    let likesArray = [...items];
    const index = likesArray.findIndex((item) => item.email === userAuth.email);
    // console.log("userIndex", index);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <PostListContainer>
      <div className="postList">Post List</div>
      <div className="main-container">
        {userPost.map((item, index) => (
          <div key={index}>
            {/* <div> {item.description}</div>
          <div> {item.postImage}</div> */}

            <div className="container">
              <div className="profile">
                <div className="profilePic">
                  <img src={item.profileImage} alt="pic" />
                </div>
                <div className="profileData">
                  <div className="profileContainer">
                    <div className="profileName">
                      {item.firstName + " " + item.lastName}
                    </div>
                    <div>
                      <MoreIcon width="24px" height="24px" fill="none" />
                    </div>
                  </div>

                  <div className="timeStamp">
                    <div className="calender">
                      <PostListCalender width="25px" height="20px" />
                      <p>{moment(item.currentDate).format("DD/MM/YYYY")}</p>
                    </div>
                    <div className="timer">
                      <Timer width="25px" height="20px" />
                      <p>
                        {moment(item.currentDate).format("LT") +
                          " to " +
                          moment(item.currentDate)
                            .add(30, "minute")
                            .format("LT")}
                      </p>
                    </div>
                    <div className="like">
                      <LikeIcon
                        className="likeicon"
                        width="25px"
                        height="20px"
                        fill={isLiked(item.likes) ? "lighgray" : "none"}
                        // fill={
                        //   item.likes.email !== item.email ? "black" : "none"
                        // }
                        onClick={() => handleClick(item.id)}
                      />

                      {item.likes.length > 1 ? (
                        <p>
                          Liked by {item.likes[0]?.firstName} and{" "}
                          {item.likes.length - 1} others
                        </p>
                      ) : item.likes.length === 1 ? (
                        <p>Liked by {item.likes[0]?.firstName}</p>
                      ) : (
                        <p> 0 Likes</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="description">
                <div>{item.description}</div>
              </div>
              <div className="postImage">
                {item?.postImage?.map((pic, index) => (
                  <img src={pic} alt="pic" key={index} />
                ))}
                {/* <img src={item.postImage[0]} alt="pic" />
              <img src={item.postImage[1]} alt="pic" />
              <img src={item.postImage[2]} alt="pic" /> */}
              </div>

              <div></div>
            </div>
          </div>
        ))}
      </div>
    </PostListContainer>
  );
};

export default PostList;
