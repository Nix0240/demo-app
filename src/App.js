import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Layout from "./components/Layout/Layout/Layout";
import GlobalStyle from "./globalStyles";
import Register from "./pages/Register/Register";
import Signin from "./pages/Signin/Signin";
import Verification from "./pages/Verification/Verification";
import Forgetpassword from "./pages/ForgetPassword/Forgetpassword";
import Resetpassword from "./pages/ResetPassword/Resetpassword";

import CreatePost from "./pages/CreatePost/CreatePost";
import PostList from "./pages/PostList/PostList";
import LikedBy from "./pages/LikedBy.jsx/LikedBy";
import Profile from "./pages/Profile/Profile";
import ChangePassword from "./pages/ChangePassword/ChangePassword";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route path="/" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetpassword" element={<Forgetpassword />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/resetpassword" element={<Resetpassword />} />
            {/* <Route path="/test" element={<Test />} /> */}
          </Route>

          {/* Private route */}

          <Route
            element={
              <Layout type="private">
                <Outlet />
              </Layout>
            }
          >
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/postlist" element={<PostList />} />
            <Route path="/likedBy" element={<LikedBy />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/changepassword" element={<ChangePassword />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
