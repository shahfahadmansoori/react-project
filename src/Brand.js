import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Brand = () => (
  <div className="Brand">
    <Layout>
      <h2>About Page</h2>
      <Link to="/">Home</Link>
    </Layout>
  </div>
);

export default Brand;