import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "userAuth",
  initialState: null,
  reducers: {
    addAuthhenticUser(state, action) {
      console.log("bbb", action);
      state = action.payload;
      //   ({
      //     email: action.payload.email,
      //     password: action.payload.password,
      //   });
      return state;
    },
    removeAuth(state, action) {
      state.email = null;
      state.password = null;
    },
  },
});

export const { addAuthhenticUser, removeAuth } = authSlice.actions;
export default authSlice.reducer;
