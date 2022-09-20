import React, { Component } from 'react';

import { BrowserRouter as BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";


import './Merchantconfirmation.css';

 
import searchicon from './images/searchicon.png';
import calendarsample from './images/calendarsample.png';
import confirmedicon from './images/confirmedicon.png';
 

class Merchantconfirmation  extends Component {

    render() {

        return (
           <div className="customerdetail-container">
		        <div className="page-header-back">
					<span>&#60;</span>
					Summary
				</div>
				
				
				<div className="company-summary">
					{/*start:summary-item*/}
					<div className="company-summary-item">
						<div className="company-summary-item-leftpart">
							<div className="company-summaryitem-top">
							Haircut | Regular
							</div>
							<div className="company-summaryitem-bottom">
							$39.15
							</div>
						</div>
						<div className="company-summary-item-rightpart">
							<div className="increment-decrement-box">
								<a href="javascript:void(0)"  className="incrementcount">+</a>
								<div className="setcountdata">1</div>
								<a href="javascript:void(0)"  className="decrementcount">-</a>
							</div>	

							<div className="company-summaryitem-rightbottom">
							$39.15
							</div>		
						</div>
						
					</div>
					{/*end:summary-item*/}
					
					
					
					{/*start:summary-item*/}
					<div className="company-summary-item">
						<div className="company-summary-item-leftpart">
							<div className="company-summaryitem-top">
							Haircut | Regular
							</div>
							<div className="company-summaryitem-bottom">
							$39.15
							</div>
						</div>
						<div className="company-summary-item-rightpart">
							<div className="increment-decrement-box">
								<a href="javascript:void(0)"  className="incrementcount">+</a>
								<div className="setcountdata">1</div>
								<a href="javascript:void(0)"  className="decrementcount">-</a>
							</div>	

							<div className="company-summaryitem-rightbottom">
							$39.15
							</div>		
						</div>
						
					</div>
					{/*end:summary-item*/}
					
					
					{/*start:Grand Total*/}
					<div className="company-summary-grandtotal">
						<div className="company-summary-grandtotal-leftpart">
							<span>Grand Total</span>
						</div>
						<div className="company-summary-grandtotal-rightpart">
							<div className="company-summary-grandtotal-top">
								$73.15
							</div>
							<div className="company-summary-grandtotal-bottom">
								+ Taxes
							</div>
						</div>
					</div>
					{/*end:Grand Total*/}
					
					
				</div>
				
				
				
			   <div className="company-date-heading">
					<h4>Date</h4>
			   </div>
			   <div className="company-calendar-section">
					<img src={calendarsample} alt="calendarsample" />
			   </div>
			   <div className="company-calendar-resultoutput">
					 June 07 | 1:00 PM
			   </div>
	   
		   
			   <div className="bookappointment-link">
					<a href="javascript:void(0)" className="bookappointment-btn">Book Appointment</a>
			   </div>
		   
				
			
			   {/*start:popup content*/}		
			   <div className="popup-fullcontent merchantconfirmation">
					<div className="popup-content">
						<div className="popup-header">
							<h4>Booking<br/> Confirmed</h4>
						</div>
						<div className="popup-body">
							<div className="popup-customer-detail">	
									
									<div className="popup-customerdetail-row confirmedicon">
										<img src={confirmedicon} alt="confirmedicon" />
									</div>
									<div className="popup-customerdetail-row">
										<Link to="/merchanviewshopdetail" className="popup-confirm-btn">
										View all Bookings
										</Link>
									</div>

							</div>
							
							
						</div>
					</div>
					
			   </div>
			   {/*end:popup content*/}
			   
			   
			   
			   
		   
		   
		   </div>

		   	

        )
    }

}

export default Merchantconfirmation;




