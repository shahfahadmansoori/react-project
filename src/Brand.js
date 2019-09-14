import React from "react";
import Layout from "./Layout";

import BrandBanner from "./components/BrandBanner";
import Content from "./components/Content";

const Brand = () => (
  <div className="Brand">
    <Layout>
      <BrandBanner />
      <Content />
    </Layout>
  </div>
);

export default Brand;
