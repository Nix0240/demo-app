import { createSlice } from "@reduxjs/toolkit";
import { current } from "immer";

export const postSlice = createSlice({
  name: "postData",
  initialState: [],
  reducers: {
    addPost(state, action) {
      state.push({
        postImage: action.payload.postImage,
        description: action.payload.description,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        profileImage: action.payload.profileImage,
        currentDate: action.payload.currentDate,
        id: action.payload.currentDate,
        likes: [],
      });
    },

    likedBy(state, action) {
      let update = [...state];
      console.log(state);
      // let update = [...current(state)];
      // console.log("Liked By update", current(state));
      // console.log("Update", update[0].likes[0]);

      // let indexLiked = update.findIndex(
      //   (item) => item.likes.email === action.payload.email
      // );
      // console.log("Liked index", indexLiked);
      let postIndex = update.findIndex((post) => post.id === action.payload.id);
      // console.log("Index", index);
      // console.log("UpdateIndex", update[index]);
      let userIndex = update[postIndex].likes.findIndex(
        (item) => item.email === action.payload.email
      );
      if (userIndex === -1) {
        update[postIndex].likes.push({
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          profileImage: action.payload.profileImage,
        });
      } else {
        update[postIndex].likes = update[postIndex].likes.filter(
          (item) => item.email !== action.payload.email
        );
      }

      state = [...update];

      // return state;
    },
  },
});

export const { addPost, likedBy } = postSlice.actions;

export default postSlice.reducer;
