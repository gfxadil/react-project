import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import userProfileImg from "../src/images/sidebar-profile.png";
import { NavLink } from 'react-router-dom';

class Sidebar extends React.Component { 
    render() { 
	  return (
		<>
            <div className="sidebar-block">
                <div className="profile-detail text-center">
                    <img src={userProfileImg} className="img-fluid" alt="profile" />
                    <h2>John Doe</h2>
                    <h4>General Physician</h4>
                    <NavLink to="/content-upload">Edit Profile</NavLink>
                    <ul>
                        <li><NavLink to="#">Badges</NavLink></li>
                        <li><NavLink to="#">Badges</NavLink></li>
                    </ul>
                </div>
                <ul className="user-followers">
                    <li className="text-center">
                        <h3>47.2k</h3>
                        <h6>Followers</h6>
                    </li>
                    <li className="text-center">
                        <h3>47.2k</h3>
                        <h6>Following</h6>
                    </li>
                </ul>
                <ul className="sidebar-menu-list">
                    <li><NavLink to="/home">Saved <i className="fa fa-chevron-right"></i></NavLink></li>
                    <li><NavLink to="/feeds">Pioneer Techniques <i className="fa fa-chevron-right"></i></NavLink></li>
                    <li><NavLink to="/home">Most viewed <i className="fa fa-chevron-right"></i></NavLink></li>
                    <li><NavLink to="/home">Document listing <i className="fa fa-chevron-right"></i></NavLink></li>
                    <li><NavLink to="/news">News <i className="fa fa-chevron-right"></i></NavLink></li>
                    <li><NavLink to="/calendar">Calendar <i className="fa fa-chevron-right"></i></NavLink></li>
                </ul>
            </div>
		</>
	  )
    }
}

export default Sidebar;