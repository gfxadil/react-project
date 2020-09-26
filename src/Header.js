import React from 'react';
import logo from "../src/images/Group1202.png";
import notificationIcon from "../src/images/notification.png";
import menImg from "../src/images/men-1.png";
import langIcon from "../src/images/Untitled1111.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
     <>
		<header>
			<nav className="navbar navbar-expand-lg static-top">
				<div className="container">
					<NavLink className="navbar-brand main-logo" to="/">
						<img src={logo} className="img-fluid" alt="logo" />
					</NavLink>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						<i className="fas fa-grip-lines"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav w-100">
							<li className="nav-item">
								<NavLink activeClassName="activemenu" exact className="nav-link" to="/">Home</NavLink>                                   
							</li>
							<li className="nav-item">
								<NavLink activeClassName="activemenu" className="nav-link" to="/about">About Us</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/pricing">Pricing</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/">Support</NavLink>
							</li>
						</ul>
					</div>
				
					<div className="right-menu">
						<ul>
							<li>
								<NavLink to="/">
									<img src={notificationIcon} className="img-fluid top-notification" alt="notification" />
								</NavLink>
							</li>
							<li className="user-profile dropdown">
								<NavLink className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
									John Doe
								</NavLink>
								<div className="dropdown-menu">
									<NavLink className="dropdown-item" to="/signin">Sign In</NavLink>
									<NavLink className="dropdown-item" to="#">Profile</NavLink>
									<NavLink className="dropdown-item" to="#">Dashboard</NavLink>
								</div>
							</li>
							<li className="language-dropdown dropdown">
								<NavLink className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
									English
								</NavLink>
								<div className="dropdown-menu">
									<NavLink className="dropdown-item" to="#">Greek</NavLink>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header> 
     </>
    )
}

export default Header;