import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './MerchantEditTime.css'
import { Link } from "react-router-dom";
import * as moment from "moment";
import DateTimePicker from "../DayTimePicker/DayTimePicker";

function MerchantEditTime(props) {
    const [formData, setFormData] = useState({
		ApptId: '',
		customerId: '',
		appointmentServiceId: '',
		total: '',
		StartTime: '',
    });
	useEffect(() => {
		axios.get(`/api${props.location.pathname}`)
		.then((res) => {
			setFormData({
				...formData,
				ApptId: res.data.ApptId,
				customerId: res.data.customerId,
				appointmentServiceId: res.data.appointmentServiceId,
				total: res.data.total,
			})
		})
	}, [])

	const handleSubmit = () => {
        axios.put(`/api${props.location.pathname}/`,formData)
        .then((res) => {
        })
    }

  return (
    <div>
        <div className="page-header-back">
					<span>&#60;</span>
					 Edit Summary Time
				</div>
        			<div className="company-date-heading">
						<h4>Date</h4>
					</div>
					<div className='calendar-container'>
						<div className="company-calendar-section">
							<DateTimePicker
							dateTime={(value) => {
								setFormData({
									...formData,
									StartTime: value
								})
							}}
							/>
						</div>
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
		   
			   <div className="bookappointment-link">
					<Link to="/merchantlandingpage" onClick={() => { handleSubmit()} }  className="bookappointment-btn">
						Book Appointment
					</Link>
			   </div>
    </div>
  )
}

export default MerchantEditTime;