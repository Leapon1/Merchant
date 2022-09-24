import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./Merchanviewshopdetail.css";

function Merchanviewshopdetail() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "chiragawasthi9@gmail.com",
    password: "Chirag@27",
  });

  const handleSubmit = () => {
    axios
      .post("https://leaponapi.herokuapp.com/api/Merchant/", formData)
      .then((res) => {
        setFormData({
          ...formData,
          name: res.data.name,
          phone: res.data.phone,
          address: res.data.address,
          email: res.data.email,
          password: res.data.password,
        });
        swal({
          title : "Success!",
          text: "Your details have Been submitted",
          icon: "success",
          timer: 1500,
          buttons: false
        });
      });
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    formData[name] = value;
    setFormData({
      ...formData,
    });
  };

  return (
    <div className="merchanviewshopdetail-container">
      <div class="marchant-header-back">
        <span>&lt;</span>
        <span>Shop Details </span>
      </div>

      <div className="marchant-viewshopdetail-form">
        <form>
          <div className="form-row">
            <label>Shop Name </label>
            <input
              type="text"
              name="name"
              placeholder="Duke Barber Shop"
              value={formData.name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-row">
            <label>Contact Number </label>
            <input
              type="tel"
              name="phone"
              placeholder="+1 (416) 519-7046"
              value={formData.phone}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-row">
            <label>Address </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="750 Spadina Ave, #3, Toronto, ON M5S 2T1"
            ></textarea>
          </div>

          <div className="form-row form-row-submit">
            {/*:<input type="submit" value="Save"  />*/}
            <Link
              onClick={() => {
                handleSubmit();
              }}
              to="/merchantlandingpage"
              className="form-submitlink-techsupport"
            >
              Save
            </Link>
            {/* <button className="form-submitlink-techsupport" type="submit">Save</button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Merchanviewshopdetail;
