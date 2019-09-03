import React from "react";
import Layout from "./Layout";
import HeroBanner from "./components/HeroBanner"

import { Link } from "react-router-dom";
const Home = props => (
  <div className="Home">
    <Layout>
     <HeroBanner />
   </Layout>
  </div>
);
export default Home;