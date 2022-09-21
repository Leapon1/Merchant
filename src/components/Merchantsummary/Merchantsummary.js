import React, { Component } from 'react';

import { Link } from "react-router-dom";


import './Merchantsummary.css';

 
// import searchicon from './images/searchicon.png';
import calendarsample from './images/calendarsample.png';
 

class Merchantsummary  extends Component {

    render() {

        return (
           <div className="summaryslotselection-container">
		        <div className="page-header-back">
					<span>&#60;</span>
					 Summary Merchant
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
					<Link to="/merchantcustomerdetail" className="bookappointment-btn">
						Book Appointment
					</Link>
			   </div>
		   
		   
		   </div>

        )
    }

}

export default Merchantsummary;




