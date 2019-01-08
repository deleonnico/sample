import React, { Component } from "react";
import "./Welcome.css";

import { Button } from "reactstrap";

class Welcome extends Component {
    render() {
        return (
            <div className="welcome-page">
                <h1>Welcome to UCC</h1>
                <Button color="primary" href="/Dashboard">Go to dashboard</Button>
                <p><strong>Note: </strong>Please activate your account before using the products.
                You can still have access to your product's dashboard, but none of the product
                can be activated. In 5 days time the link will expire and your account will be removed.</p>
            </div>
        )
    }
}

export default Welcome;