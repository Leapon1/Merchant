import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import './Header.css';

import companylogo from './images/companylogo.png';
import mobilemenu from './images/mobilemenu.png';
import listarrow from './images/listarrow.png';


class MyHeader  extends Component {
	componentDidMount(){
		$('.mobilemenu').on("click", function(){
			$('.header-mobilemenu-content').toggle(200);
			$('.App').toggleClass('overlay')
		})
		$('.header-mobilemenu-content-inner').on("click", function(){
			$('.header-mobilemenu-content').hide(200);
			$('.App').removeClass('overlay')
		})
	}

    render() {
        return (
            <header  className="header-container">				
				<div className="header-inner-section"> 
					<div className="header-leftpart">
					<a href="/"><img src={companylogo} alt="companylogo" /></a>
					</div>
					<div className="header-middlepart">DUKE</div>
					<div className="header-rightpart">
					  <span className="header-mobilemenu">
						<a className="mobilemenu"><img src={mobilemenu} alt="mobilemenu" /></a>
					  </span>
					</div>

					<div className="header-mobilemenu-content">
						<div className="header-mobilemenu-content-inner">
						    <div className="header-mobilemenu-link">
								<Link to="/merchanviewshopdetail">View shop details <img src={listarrow} alt="listarrow" /></Link>
								<Link to="/merchantechsupport">Technical support <img src={listarrow} alt="listarrow" /></Link>
							</div>
							<a className="logoutlink-header" >Logout</a>
						</div>
					</div> 


				</div>
            </header>

        )
    }

}

export default MyHeader;




