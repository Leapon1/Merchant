import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Merchantlogin.css";
// import googlelogoicon from "./images/googlelogoicon.png";

class Merchantlogin extends Component {
  render() {
    return (
      <div className="merchantlogin-container">
        <div className="merchantlogin-form">
          <form>
            <div className="form-row form-row-title">
              <h4>Login</h4>
            </div>
            <div className="form-row">
              <input type="text" placeholder="Email or Phone no." />
            </div>
            <div className="form-row">
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-row form-row-checkbox">
              <input
                type="checkbox"
                id="rememberme-check"
                name="merchantlogin-check"
                value="rememberme"
              />
              <label htmlFor="rememberme-check">Remember me</label>
            </div>
            <div className="form-row">
              {/*end:<input type="submit" value="Next"  />*/}
              <Link to="/merchantlandingpage" className="form-submitlink">
                Next
              </Link>
            </div>
            <div className="form-row forgot-password-text">
              Forgot Password ?
            </div>
            {/* <div className="form-row">
              <div className="form-divider"></div>
            </div>
            <div className="form-row">
              <div className="form-ortext">OR</div>
            </div> */}
            {/* <div className="form-row">
              <div className="continue-google-link">
                <Link to="/">
                  <div>
                    <img src={googlelogoicon} alt="googlelogoicon" />{" "}
                  </div>
                  <div>Continue with Google</div>
                </Link>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    );
  }
}

export default Merchantlogin;
