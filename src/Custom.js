import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";

const Slick = props => (
		<div className="application">
            <Helmet>
              <script src="./src/js/custom.js" type="text/javascript" />
            </Helmet>
        </div>
);

export default Slick;