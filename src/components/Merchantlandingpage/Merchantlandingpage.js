import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import "./Merchantlandingpage.css";
import calendarsamplemrchant from "./images/calendarsamplemrchant.png";
import addusericon from "./images/addusericon.png";
import CustomerInfoCard from "../CustomerInfoCard/CustomerInfoCard";
import * as moment from "moment";

var customersData = [];
// MONTH
var currentMonth = moment().format('MMMM');
var currentMonthYear = " "+moment().format('MMM') +" "+ moment().format('YY');
// MONTH

// DATE
var datePicker_3 = moment().subtract(3, 'd').format("DD");
var datePicker_2 = moment().subtract(2, 'd').format("DD");
var datePicker_1 = moment().subtract(1, 'd').format("DD");
var datePicker =  moment().format("DD");
var datePicker1 = moment().add(1, 'days').format('DD');
var datePicker2 =  moment().add(2, 'days').format('DD');
var datePicker3 =  moment().add(3, 'days').format('DD');
// DATE

// DAY 
var dayName_3 = moment().subtract(3, 'd').format('ddd');
var dayName_2 = moment().subtract(2, 'd').format('ddd');
var dayName_1 = moment().subtract(1, 'd').format('ddd');
var dayName = moment().format('ddd');
var dayName1 = moment().add(1, 'd').format('ddd');
var dayName2 = moment().add(2, 'd').format('ddd');
var dayName3 = moment().add(3, 'd').format('ddd');
// DAY

class Merchantlandingpage extends Component {
  constructor(props) {
    super(props)
    let currentDate = new Date();
    this.state = {
      customerInfo: [],
      appointmentList: [],
      appointmentId: [],
      services: [],
      monthName: moment().format('MMMM'),
      selectedDate: moment().format("DD"),
    };
    
  }

  componentDidMount() {
    this.initialCall(this.state.sliceNewDate);
  }

  initialCall(sliceNewDate) {
    const AppointmentListURL =
      "/api/Appointment/";
    axios.get(AppointmentListURL).then((response) => {
      let appointmentList = response.data.filter((dateCompare) => {
        const compareDate = moment(dateCompare.StartTime)
          .format("DD MMM YY")
          .slice(0, 10);
        const sliceNewDate = this.state.selectedDate+currentMonthYear;
        if (compareDate == sliceNewDate) {
          const customerInfoURL =
            "/api/Customer/" +
            dateCompare.customerId;
          axios.get(customerInfoURL).then((custResponse) => {
            dateCompare.customer = custResponse.data;

          if(this.allAppointmentServiceList != undefined){
            dateCompare.appServices = this.allAppointmentServiceList.filter(info => info.appointmentId == dateCompare.ApptId);
            
            dateCompare.appServices.map(appService => {
              const serviceApi ='/api/Service/'+ appService.serviceId
              axios.get(serviceApi)
              .then((res) => {
                appService.service = res.data;
                this.setState({
                  appointmentList: JSON.parse(JSON.stringify(appointmentList))
                })
              })
            })
            

          } else {
            const allAppointmentServiceList = "/api/AppointmentService/";
            axios.get(allAppointmentServiceList).then((apptServiceRes) => {
              
              this.allAppointmentServiceList = apptServiceRes.data;
              dateCompare.appServices = this.allAppointmentServiceList.filter(info => info.appointmentId == dateCompare.ApptId);

              dateCompare.appServices.map(appService => {
                const serviceApi ='/api/Service/'+ appService.serviceId
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
          <a href="http://localhost:3001/customerLandingpage">
            <img src={addusericon} alt="addusericon" />
          </a>
        </div>
        <div className="merchantlanding-calender">
          {/* <img src={calendarsamplemrchant} alt="calendarsamplemrchant" />{" "} */}
          <p className="monthName">{currentMonth}</p>
          <div className="datePicker">
            <div className="date_single_item">
              <p className="dayName">{dayName_3}</p>
              <p className={this.state.selectedDate == datePicker_3 ? "selected_date" : ""} onClick={() => {
                this.setState({
                  selectedDate: datePicker_3, 
                  appointmentList: [],
                })
                this.initialCall(datePicker_3);
              }}>{datePicker_3}</p>
            </div>
            <div className="date_single_item">
              <p className="dayName">{dayName_2}</p>
              <a className={this.state.selectedDate == datePicker_2 ? "selected_date" : ""} onClick={() => {
                this.setState({
                  selectedDate: datePicker_2,
                   appointmentList: [],
                   })
                this.initialCall(datePicker_2);
              }}>{datePicker_2}</a>
            </div>
            <div className="date_single_item">
              <p className="dayName">{dayName_1}</p>
              <a className={this.state.selectedDate == datePicker_1 ? "selected_date" : ""} onClick={() => {
                this.setState({
                  selectedDate: datePicker_1, 
                  appointmentList: [],
                })
                this.initialCall(datePicker_1);
              }}>{datePicker_1}</a>
            </div>
            <div className="date_single_item">
              <p className="dayName">{dayName}</p>
              <a className={this.state.selectedDate == datePicker ? "selected_date" : ""} onClick={() => {
                this.setState({
                  selectedDate: datePicker,
                   appointmentList: [],
                  })
                this.initialCall(datePicker);
              }}>{datePicker}</a>
            </div>
            <div className={"date_single_item "}>
              <p className="dayName">{dayName1}</p>
              <a className={this.state.selectedDate == datePicker1 ? "selected_date" : ""} 
              onClick={() => {
                this.setState({
                  selectedDate: datePicker1, 
                  appointmentList: [], 
                })
                this.initialCall(datePicker1);
              }}>
                {datePicker1}
              </a>
            </div>
            <div className="date_single_item">
              <p className="dayName">{dayName2}</p>
              <a className={this.state.selectedDate == datePicker2 ? "selected_date" : ""} onClick={() => {
                this.setState({
                  selectedDate: datePicker2, 
                  appointmentList: [],
                })
                this.initialCall();
              }}>{datePicker2}</a>
            </div>
            <div className="date_single_item">
              <p className="dayName">{dayName3}</p>
              <a className={this.state.selectedDate == datePicker3 ? "selected_date" : ""} onClick={() => {
                this.setState({
                  selectedDate: datePicker3, 
                  appointmentList: [],
                })
                this.initialCall();
              }}>{datePicker3}</a>
            </div>
          </div>
        </div>
        <div className="merchantlanding-calender-result">
          <div className="merchantlanding-calender-datetime">
          {"Today | "+ new Date().toString().slice(0, 10)}
          </div>
          <div className="merchantlanding-calender-upnext">
            <Link to="/landingpageselection">
              <button>Up next</button>
            </Link>
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
