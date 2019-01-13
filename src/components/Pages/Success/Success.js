import React, { Component } from "react";
import "./Success.css";

import { Button } from "reactstrap";

class Success extends Component {
    render() {
        return (
            <div className="success-page">
                <h1>Congratulations!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo elit ut diam ornare elementum vel at dui. Aliquam euismod velit justo, et auctor tortor semper sed. Maecenas porttitor tortor ac turpis pharetra, non facilisis urna fermentum.</p>
                <Button color="primary" href="/Dashboard">Go to dashboard</Button>
            </div>
        );
    }
}

export default Success;