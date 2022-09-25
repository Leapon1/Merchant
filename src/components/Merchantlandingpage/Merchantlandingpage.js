import React, { Component } from "react";
import axios from "axios";
import "./Merchantlandingpage.css";
import addusericon from "./images/addusericon.png";
import CustomerInfoCard from "../CustomerInfoCard/CustomerInfoCard";
import * as moment from "moment";

// MONTH
var currentMonth = moment().format('MMMM');
var currentMonthYear = " "+moment().format('MMM') +" "+ moment().format('YY');
// MONTH

// DATE
var datePicker =  moment().format("DD");


const numbers = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1 , 0 , 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

class Merchantlandingpage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appointmentList: [],
      services: [],
      selectedDate: moment().format("DD"),
    };
    
  }

  componentDidMount() {
    this.initialCall(this.state.sliceNewDate);
    document.getElementById('calender-date-number3').scrollIntoView();
  }

  initialCall(sliceNewDate) {
    const AppointmentListURL =
      "/api/Appointment/";
    axios.get(AppointmentListURL).then((response) => {
      let appointmentList = response.data.filter((dateCompare) => {
        const compareDate = moment(dateCompare.StartTime)
          .format("DD MMM YY")
          .slice(0, 10);
        const sliceNewDate = this.state.selectedDate + currentMonthYear;
        if (compareDate === sliceNewDate) {
          const customerInfoURL ="/api/Customer/" + dateCompare.customerId +"/";
          axios.get(customerInfoURL).then((custResponse) => {
            dateCompare.customer = custResponse.data;
          if(this.allAppointmentServiceList != undefined){
            dateCompare.appServices = this.allAppointmentServiceList.filter(info => info.appointmentId == dateCompare.ApptId);
            
            dateCompare.appServices.map(appService => {
              const serviceApi ='/api/Service/'+ appService.serviceId+"/"
              axios.get(serviceApi)
              .then((res) => {
                appService.service = res.data;
                this.setState({
                  appointmentList: appointmentList
                })
              })
            })
            

          } else {
            const allAppointmentServiceList = "/api/AppointmentService/";
            axios.get(allAppointmentServiceList).then((apptServiceRes) => {
              
              this.allAppointmentServiceList = apptServiceRes.data;
              dateCompare.appServices = this.allAppointmentServiceList.filter(info => info.appointmentId == dateCompare.ApptId);

              dateCompare.appServices.map(appService => {
                const serviceApi ='/api/Service/'+ appService.serviceId+"/"
                axios.get(serviceApi)
                .then((res) => {
                  appService.service = res.data;
                  this.setState({
                    appointmentList: JSON.parse(JSON.stringify(appointmentList))
                  })
                })
              })
              
            });
          }

          });
          return true;
        } else {
          return false;
        }
      });
      this.setState({
        appointmentList: appointmentList
      })
    });
  }

  render() {
    return (
      <div className="merchantlandingpage-container">
        <div className="adduser-floatbox">
          <a href="https://leapon-customer.herokuapp.com/">
            <img src={addusericon} alt="addusericon" />
          </a>
        </div>
        <div className="merchantlanding-calender">
          <p className="monthName">{currentMonth}</p>
          <div className="datePicker">
          
          <div className="scrollable-con">
          {
            numbers.map((number, index) => {
              let currentDay = moment().add(number, 'd').format('ddd');
              let date = moment().add(number, 'days').format('DD');
              return (
                <div key={"number"+ index} className="date_single_item" id={"calender-date-number"+number}>
                  <p className="dayName">{currentDay}</p>
                  <div className={this.state.selectedDate == date ? "selected_date" : ""}>
                    <a onClick={() => {
                      this.setState({
                        selectedDate: date,
                        appointmentList: [],
                        })
                      this.initialCall(datePicker);
                    }}>{date}</a>
                  </div>
              </div>
              )
            }
                
          )}
          </div>
         
          </div>
        </div>
        <div className="merchantlanding-calender-result">
          <div className="merchantlanding-calender-datetime">
          {"Today | "+ new Date().toString().slice(0, 10)}
          </div>
          <div className="merchantlanding-calender-upnext">
              <span>Up next</span>
          </div>
          <div className="merchantlanding-calender-content">
            {/* <div className="merchantlanding-calender-datetime">
              {"Today | "+ new Date().toString().slice(0, 10)}
            </div> */}
            {/*sta rt:merchantlanding calender item*/}
            {this.state.appointmentList.map((appointment) => {
                return (
                  <CustomerInfoCard
                  key={'appointment'+appointment.ApptId}
                    appointment={appointment}
                  />
                );
              })}
            {/*end:merchantlanding calender item*/}
          </div>
          {/*end:*/}
        </div>
      </div>
    );
  }
}

export default Merchantlandingpage;
