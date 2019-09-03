import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Register = () => (
  <div className="register">
    <Layout>
      <h2>Register</h2>
      <Link to="/">Home</Link>
    </Layout>
  </div>
);

export default Register;