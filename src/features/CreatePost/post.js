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
      let update = [...current(state)];
      // console.log("Liked By update", current(state));
      console.log("Update", update.likes.email[0]);

      // let indexLiked = update.findIndex(
      //   (item) => item.likes.email === action.payload.email
      // );
      // console.log("Liked index", indexLiked);
      let index = update.findIndex((post) => post.id === action.payload.id);
      // console.log("Index", index);
      // console.log("UpdateIndex", update[index]);
      update[index].likes = [
        ...update[index].likes,
        {
          firstName: action.payload.firstName,
          email: action.payload.email,
          profileImage: action.payload.profileImage,
        },
      ];
      state = [...update];
      console.log("updateUser", state);
      return state;
    },
  },
});

export const { addPost, likedBy } = postSlice.actions;

export default postSlice.reducer;
