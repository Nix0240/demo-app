import React from "react";

import Navbar from "../../Navbar/Navbar";

const Layout = ({ type = "public", children }) => {
  // console.log("type", type);
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navbar type={type} />
      <div style={{ display: "flex", flex: 1 }}>{children}</div>
    </div>
  );
};

export default Layout;
