import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MerchantEditTime.css";
import swal from "sweetalert";
import {  useHistory } from "react-router-dom";
import * as moment from "moment";
import DateTimePicker from "../DayTimePicker/DayTimePicker";

function MerchantEditTime(props) {
	const history = useHistory();
  const [services, setServices] = useState([]);  
  const [formData, setFormData] = useState({
    ApptId: "",
    customerId: "",
    appointmentServiceId: "",
    total: "",
    StartTime: "",
    Status: "",
  });

  useEffect(()=>{
    let services = []
    props.location.state.state.item.appServices.map((item ) => {
      services.push(item)
    });
    setServices(services)
  }, [props.location.state.state.item.appServices])


  const handleSubmit = () => {
    const url = `/api${props.location.pathname}`
    axios.put(url, formData).then((res) => {
      swal({
        title : "Success!",
        text: "Your details have Been submitted",
        icon: "success",
        timer: 1500,
        buttons: false
      });
      history.push("/merchantlandingpage");
    })
    .catch((error) => {
      swal({
        title : "Warning!",
        text: error,
        icon: "warning",
        timer: 1500,
        buttons: false
      });
    })
  };



  return (
    <div>
      <div className="page-header-back">
        <a className="backbtn" href="/merchantlandingpage">
          <span>&#60;</span>
        </a>
        Edit Summary Time
      </div>

	  <div className="company-summary">    
      {  
        services.map((item, index) => {
          return (
              <div key={'service'+ index} className="company-summary-item">
                <div className="company-summary-item-leftpart">
                  <div className="company-summaryitem-top">{item.service.name}</div>
                  <div className="company-summaryitem-bottom">${item.service.price}</div>
                </div>
                <div className="company-summary-item-rightpart">
                  <div className="incrementdecrement-box">
                    <div className="total-count total-count-1">{item.qty}</div>
                  </div>
                  <div className="company-summaryitem-rightbottom">
                    ${item.service.price * item.qty}
                    {/* {productCountPrice(item, index)} */}
                  </div>
                </div>
              </div>
          );
        })
      }
	   	<div className="company-summary-grandtotal">
              <div className="company-summary-grandtotal-leftpart">
                <span>Grand Total</span>
              </div>
              <div className="company-summary-grandtotal-rightpart">
                <div className="company-summary-grandtotal-top">
                  {props.location.state.state.item.total}
                </div>
                <div className="company-summary-grandtotal-bottom">+ Taxes</div>
              </div>
            </div>
            {/*end:Grand Total*/}
          </div>

		<div className="company-date-heading">
        <h4>Date</h4>
      </div>


      <div className="calendar-container">
        <div className="company-calendar-section">
          <DateTimePicker
            dateTime={(value) => {
              setFormData({ 
                StartTime: value,
                ApptId: props.location.state.state.item.ApptId,
                customerId: props.location.state.state.item.customerId,
                appointmentServiceId: props.location.state.state.item.appointmentServiceId,
                total: props.location.state.state.item.total,
                Status: props.location.state.state.item.Status,
              })
          }}
          />
        </div>
      </div>

      {
        formData.StartTime ? 
      <div className="bottom-fixed-container">
        <div>
          <div className="company-calendar-resultoutput">
            {moment(formData.StartTime).format("MMMM DD") != "Invalid date"
              ? moment(formData.StartTime).format("MMMM DD")
              : "Date"}{" "}
            |{" "}
            {moment(formData.StartTime).format("LT") != "Invalid date"
              ? moment(formData.StartTime).format("LT")
              : "Time"}
          </div>
        </div>
        <div>
          <div className="bookappointment-link">
            <a
              onClick={() => {
                handleSubmit();
              }}
              className="bookappointment-btn"
            >
              Save Changes
            </a>
          </div>
        </div>
      </div> : <div></div>

      }
      
      

    </div>
  );
}

export default MerchantEditTime;
