import { createSlice } from "@reduxjs/toolkit";
// import storage from "redux-persist-indexeddb-storage";

export const userSlice = createSlice({
  name: "userInfo",
  initialState: [
    {
      profileImage: "",
      firstName: "Nik",
      lastName: "Gurjar",
      email: "nikhilesh.gurjar@openxcell.com",
      phone: 7742179519,
      password: "qwer1234",
      dob: "2023-04-03",
      gender: "male",
    },
  ],
  reducers: {
    addUserData(state, action) {
      // console.log("aaa", action);
      state.push({
        profileImage: action.payload.profileImage,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phone: action.payload.phone,
        password: action.payload.password,
        dob: action.payload.dob,
        gender: action.payload.gender,
      });
    },
    updateUser(state, action) {
      // console.log("state", state);
      let update = [...state];
      // console.log("userAction", action);
      // console.log("UpdateData", update);
      let index = update.findIndex(
        (user) => user.email === action.payload.email
      );
      console.log("Index", index);
      update[index] = action.payload;
      // console.log("updateIndex", update[index]);
      state = [...update];
      console.log("updateUser", state);
      return state;
    },
  },
});

//for dispatch
export const { addUserData, updateUser } = userSlice.actions;
//for configure store
export default userSlice.reducer;
