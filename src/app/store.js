// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userReducer from "../features/Register/userSlice";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist-indexeddb-storage";
// import thunk from "redux-thunk";

// // import { createLogger } from "redux-logger";

// //logger middleware

// // const logger = createLogger();

// //persist code
// const persistConfig = {
//   key: "root",
//   storage: storage("Mydb"),
// };

// const rootReducer = combineReducers({
//   users: userReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// //persist code
// //change user reducer to persisit reducer
// const store = configureStore({
//   reducer: persistReducer,
//   // {
//   //   // userInfo: userReducer,
//   //   userInfo: persistedReducer,
//   //   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   // },
//   middleware: [thunk],
// });

// const persistor = persistStore(store);

// export default store;
// export { persistor };

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";
import userReducer from "../features/Register/userSlice";
import authReducer from "../features/Auth/Auth";
import postReducer from "../features/CreatePost/index";
import storage from "redux-persist-indexeddb-storage";

const persistConfig = {
  key: "root",
  storage: storage("myDB"),
};

const rootReducer = combineReducers({
  userInfo: userReducer,
  userAuth: authReducer,
  userPost: postReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
