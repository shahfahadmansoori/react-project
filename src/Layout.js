import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => (
  <div className="layout">
    <Topbar />
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
