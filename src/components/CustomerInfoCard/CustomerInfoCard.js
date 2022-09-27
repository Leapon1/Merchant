import React, {useEffect, useState} from "react";
import * as moment from "moment";
import { Link, useHistory  } from "react-router-dom";

import './CustomerInfoCard.css'
import axios from "axios";

const CustomerInfoCard = (props) => {
  const history = useHistory();
 const [isVisible, setIsvisible] = useState(false);
 const [formData, setFormdata] = useState({
  Status : "",
  StartTime: props.appointment.StartTime,
  customerId: props.appointment.customerId,
  total: props.appointment.total,
 });


 const handleStatus = (status) => {
  formData.Status = status
    const url = "/api/Appointment/"+props.appointment.ApptId+"/"
    axios.put(url, formData)
    .then((res) => {
      window.location.reload();
    })
 }

  return (
  <div className={"merchantlanding-calender-item "+(props.appointment.Status === "1" ? "" : "mb")} key={'app'+props.appointment.ApptId}>
        <div className="merchantlanding-calender-itemleftpart">
          <h5>{moment(props.appointment.StartTime).format("h:mm")}</h5>
          <p>30 Mins</p>
        </div>
        {
          props.appointment && props.appointment.customer != undefined && (
            <div className="merchantlanding-calender-itemrightpart">
              <h3>{props.appointment.customer.name}</h3>
              {/* <p>{props.appointment.customer.phone}</p> */}
              {
                props.appointment && props.appointment.appServices != undefined && props.appointment.appServices.length > 0 && (
                  <div>
                    {
                      props.appointment.appServices.map((appService, appServiceIndex) => {
                        if(appService.service){
                          return (<p key={'app'+props.appointment.ApptId+'-ApptServId-'+appService.ApptServId}>{appService.service.desc}</p>)
                        }
                      })
                    }
                  </div>
                )
              }
              <div className="status">
                { props.appointment.Status === "2" ? <p className="status-text">Completed</p> : <div></div>}
                { props.appointment.Status === "3" ? <p className="status-text">Cancelled</p> : <div></div>}
              </div>
            </div>
          )
        } 
        
          <div className={"hover-function "+(isVisible ? "active" : "")} >
            <div className="hover-function-inner">
              <Link className="hover-link" 
              onClick={() => { 
                handleStatus("2");
                setIsvisible(false)
              }}
              >Completed |</Link>
              <Link
                className="hover-link"
                onClick={() => {
                  history.push("/Appointment/"+ props.appointment.ApptId+"/", {
                    state: {
                      item: props.appointment
                    },
                  })
                }}
              >
                Edit |
              </Link>
              <Link className="hover-link" 
              onClick={() => { 
                
                handleStatus("3");
                setIsvisible(false)}}
              >Cancel</Link>
            </div>
          </div>

        
        <span className="total-amount">${formData.total}<span>+taxes</span></span>
        <a className="toggleBtn-con" onClick={() => {
              setIsvisible(!isVisible)
            }}>
              <i className="toggleBtn fa-solid fa-bars"></i>
        </a>
            
      </div>
  );
};

export default CustomerInfoCard;
