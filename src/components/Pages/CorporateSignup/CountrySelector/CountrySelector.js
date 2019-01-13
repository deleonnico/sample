import React, { Component } from "react";
import "./CountrySelector.css";

import { Button } from "reactstrap";

class CountrySelector extends Component {
    render() {
        return (
            <div className="select-country-page">
                <h1>Choose Country</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button className="country-button" color="primary" href="/CorporateSignup/PH">Philippines</Button>
                <Button className="country-button" color="primary" href="/CorporateSignup/SG">Singapore</Button>
                <Button className="country-button" color="primary" href="/CorporateSignup/US">United States</Button>
            </div>
        );
    }
}

export default CountrySelector;