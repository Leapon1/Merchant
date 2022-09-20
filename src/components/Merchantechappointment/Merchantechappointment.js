import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './Merchantechappointment.css';


class Merchantechappointment  extends Component {

    render() {

        return (
           <div className="merchantechappointment-container">
                 <div class="marchant-header-back">
                    <span>&lt;</span>
                    <span><Link to="/merchantsummary">Add an Appointment</Link> </span>
                </div>      

                <div className="merchantechappointment-form">
                    <form>
                        <div className="form-row">
                            <select name="service" id="service">
                                <option value="haircut">Select a service</option>
                                <option value="haircutt">Hair Cut </option>
                                <option value="beard">Beard</option>
                                <option value="face">Face</option>
                            </select>
                        </div>
                    </form>
                </div>


		   </div>

        )
    }

}

export default Merchantechappointment;





