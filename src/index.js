import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Helmet} from "react-helmet";

ReactDOM.render(
	<>
	  <BrowserRouter>
	    <App />
	  </BrowserRouter>
	</>,
  document.getElementById('root')
);

const Slick = props => (
		<div className="application">
            <Helmet>
              <script src="./src/js/custom.js" type="text/javascript" />
            </Helmet>
        </div>
);