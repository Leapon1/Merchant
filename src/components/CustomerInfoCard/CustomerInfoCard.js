import React, {useEffect, useState} from "react";
import * as moment from "moment";
import { Link, useHistory  } from "react-router-dom";

import './CustomerInfoCard.css'

const CustomerInfoCard = (props) => {
  const history = useHistory();
 const [isVisible, setIsvisible] = useState(false);
 const [status, setStatus] = useState("");

  return (
  <div className={"merchantlanding-calender-item "+(status !== "" ? "mb" : "")} key={'app'+props.appointment.ApptId}>
        <div className="merchantlanding-calender-itemleftpart">
          <h5>{moment(props.appointment.StartTime).format("h:mm")}</h5>
          <p>30 Mins</p>
        </div>
        {
          props.appointment && props.appointment.customer != undefined && (
            <div className="merchantlanding-calender-itemrightpart">
              <h3>{props.appointment.customer.name}</h3>
              <p>{props.appointment.customer.phone}</p>
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
                {status !== "" ? <p className="status-text">{status}</p> : <div></div>}
                
              </div>
            </div>
          )
        } 
        
            

          <div className={"hover-function "+(isVisible ? "active" : "")} >
            <div className="hover-function-inner">
              <Link className="hover-link" 
              onClick={() => { 
                setStatus("Completed")
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
                setStatus("Cancelled")
                setIsvisible(false)}}
              >Cancel</Link>
            </div>
          </div>

          
        <a className="toggleBtn-con" onClick={() => {
              setIsvisible(!isVisible)
            }}>
              <i className="toggleBtn fa-solid fa-bars"></i>
            </a>
            
      </div>
  );
};

export default CustomerInfoCard;
