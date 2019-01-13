import React, { Component } from "react";

import { FormText, Button } from "reactstrap";

import BasicInformation from "./SG/BasicInformation/BasicInformation";
import CompanyInformation from "./SG/CompanyInformation/CompanyInformation";
import BusinessInformation from "./SG/BusinessInformation/BusinessInformation";
import Agreement from "./SG/Agreement/Agreement";

class FormSG extends Component {
    render() {
        return (
            <div>
                <BasicInformation />                
                <hr />
                <CompanyInformation />
                <hr />
                <BusinessInformation />
                <hr />
                <Agreement />
                <hr />

                <FormText>* Fields required</FormText>
                <Button className="float-right" color="primary" outline href="/Success">Submit</Button>
            </div>
        );
    }
}

export default FormSG;