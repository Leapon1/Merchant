import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Merchantechsupport.css";

function Merchantechsupport() {
  const [formData, setFormData] = useState({
    query: "",
  });

  const handleSubmit = () => {
    axios.post("https://sheet.best/api/sheets/b48b630e-8ea9-4706-85e5-f69eba744412",formData)
      .then((res) => {
      });
  };
  return (
    <div className="merchantechsupport-container">
      <div className="marchant-header-back">
        <span>&lt;</span>
        <span>Technical Support </span>
      </div>

      <div className="marchant-technicalsupport-form">
        <form>
          <div className="form-row">
            <label>Type your query</label>
            <textarea
              defaultValue={formData.query}
              onChange={(e) => setFormData({ query: e.target.value })}
              name="query"
            >
            </textarea>
          </div>
          <div className="form-row form-row-submit">
            {/*end:<input type="submit" value="Send"  />*/}
            <Link
              onClick={() => handleSubmit()}
              to="/merchantlandingpage"
              className="form-submitlink-techsupport"
            >
              Submit
            </Link>
          </div>
          <div className="form-row">
            <div className="form-ortext">OR</div>
          </div>

          <div className="form-row callclient-support">
            <p>Call Client Support at </p>
            <p>+1 (437) 228-7263 (Nikhil Pawar) </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Merchantechsupport;
