import React from "react";
import Layout from "./Layout";
import BrandBanner from "./components/BrandBanner";

const SignIn = () => (
  <Layout>
    <BrandBanner />
    <div className="container">
      <div className="row sign-up">
        <div className="col-6">
          <form clasName="">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              ></input>
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              ></input>
            </div>
            <div className="d-flex justify-content-between">
              <a href="#" className="button">
                Sign in
              </a>

              <a href="#" className="link">
                Forgot Password
              </a>
            </div>
          </form>
        </div>
        <div className="col-6">
          <form clasName="">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              ></input>
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Your Password"
              ></input>
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm Password"
              ></input>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <p class="form-check-label" for="defaultCheck1" id="checkbox">
                Sign up for exclusive updates, discounts, new arrivals,
                contests, and more!
              </p>
            </div>
            <div className="d-flex justify-content-between pt-3">
              <a href="# " className="create-btn">
                Create Acount
              </a>

              <p>
                By clicking ‘Create Account’,
                <br />
                you agree to our
                <a href="">Privacy Policy</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
);

export default SignIn;
