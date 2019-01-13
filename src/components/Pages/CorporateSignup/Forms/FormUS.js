import React, { Component } from "react";

import { FormText, Button } from "reactstrap";

import BasicInformation from "./US/BasicInformation/BasicInformation";
import CompanyInformation from "./US/CompanyInformation/CompanyInformation";
import Agreement from "./US/Agreement/Agreement";

class FormUS extends Component {
    render() {
        return (
            <div>
                <BasicInformation />                
                <hr />
                <CompanyInformation />
                <hr />
                <Agreement />
                <hr />

                <FormText>* Fields required</FormText>
                <Button className="float-right" color="primary" outline href="/Success">Submit</Button>
            </div>
        );
    }
}

export default FormUS;