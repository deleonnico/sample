import React, { Component } from "react";

import { FormText, Button } from "reactstrap";

import BasicInformation from "./PH/BasicInformation/BasicInformation";
import CompanyInformation from "./PH/CompanyInformation/CompanyInformation";
import BusinessInformation from "./PH/BusinessInformation/BusinessInformation";
import Agreement from "./PH/Agreement/Agreement";

class FormPH extends Component {
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

export default FormPH;