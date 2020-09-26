import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.js";
import Home from './Home';
import About from './About';
import Pricing from './Pricing';
import ViewAllVideos from './ViewAllVideos';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Slick from './Custom';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/pricing" component={Pricing} />
				<Route exact path="/viewallvideos" component={ViewAllVideos} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/signup" component={SignUp} />
				<Redirect to="/" />
			</Switch>
		</>
	)
}

export default App;