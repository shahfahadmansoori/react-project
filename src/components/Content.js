import React from "react";
import ContentImg1 from "../pic/ContentImg-1.png";
import ContentImg2 from "../pic/ContentImg-2.png";
import ContentImg3 from "../pic/ContentImg-3.png";
import awardImg1 from "../pic/award-1.png";
import awardImg2 from "../pic/award-2.png";
import awardImg3 from "../pic/award-3.png";

const Content = () => (
  <div className="container ">
    <div className="row">
      <div className="content d-flex justify-content-between">
        <div className="col-6 ">
          <div className="content-img-1 img-fluid">
            <img src={ContentImg1} alt="Content-img" />
          </div>
          <div className="content-img-2 img-fluid">
            <img src={ContentImg3} alt="contentimg" />
          </div>
          <div className="content-text-1">
            <h5>our values, vision and strategy</h5>
            <span>
              The above image would be a great place for an advertising video
            </span>
            <p>
              Cras maximus venenatis malesuada. Nulla sagittis elit felis, ac
              facilisis quam ornare aliquam. Etiam cursus odio vitae dui
              dignissim, sed tempus lacus tincidunt et donec sapien velit,
              rhoncus eu nulla a, molestie tempus mi maecenas sagittis ornare.
              Pellentesque sapien mi, <a href="#">tincidunt nec magna vitae</a>,
              volutpat elementum odioni lorem Aliquam tempor massa vitae augue
              mattis tempor id in ante ut augue erat, luctus eil.
            </p>
          </div>
        </div>

        <div className="col-6">
          <div className="content-text-1">
            <h5>hand designed clothing</h5>
            <span>
              established in 2013, avenue fashion Sed dictum elit vel sapien
              luctus eras
            </span>
            <p>
              Praesent feugiat malesuada tristique maecenas rhoncus diam eget
              quam vestibulim consectetur, id condimentum leo porttitor. Cum
              sociis natoque penatibus eta magnis disut parturient montes,
              nascetur ridiculus mus. Donec sem lorem laoreet tempor un risus
              vitae, rutrum sodales nibh suspendisse congue metus nunc, id
              viverra elit loreti rhoncus quis consecteur es. Donec pulvinar
              tempor lorem a pretium justo interdum
            </p>
          </div>
          <div className="content-img-3 img-fluid">
            <img src={ContentImg2} alt="contentimg" />
          </div>
          <div className="content-text-1">
            <h5>Ethical trading</h5>
            <span>
              we oversee the working conditions of the people in the supply
              chain
            </span>
            <p>
              Nullam dapibus consectetur neque, faucibus porttitor purus iaculis
              sed. Aenean eras dapibus augue, eget dignissim dui maecenas et
              rhoncus mim, vel semper arcu lorem Pellentesque congue justo
              esteir pellentesque aliquet massa eget posuere tincidunt. Cras
              viverra ullamcorper nunc accumsan hendrerit.
              <br />
              <a href="#">A link</a>
            </p>
          </div>
          <div className="row">
            <div className="award d-flex justify-content-around">
              <div className="awrad-1 col-2">
                <img src={awardImg1} alt="award" />
              </div>
              <div className="awrad-1 col-2">
                <img src={awardImg3} alt="award" />
              </div>
              <div className="awrad-1 col-2">
                <img src={awardImg3} alt="award" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Content;
