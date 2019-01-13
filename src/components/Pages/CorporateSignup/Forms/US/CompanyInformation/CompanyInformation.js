import React, { Component } from "react";

import { Form, FormGroup, FormText, Label, Input, CustomInput } from "reactstrap";

class CompanyInformation extends Component {
    render() {
        return (
            <Form className="company-information">
                <FormGroup>
                    <h2>Company Information</h2>
                    <FormText color="muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </FormText>
                </FormGroup>

                <div className="row">
                    <FormGroup className="col-6">
                        <Label>Company Name *</Label>
                        <Input type="text" placeholder="ABC Corp." />
                    </FormGroup>
                    <FormGroup className="col-6">
                        <Label>Country *</Label>
                        <Input type="select">
                            <option>United States</option>
                            <option>Japan</option>
                            <option>Philippines</option>
                            <option>Singapore</option>
                            <option>United Kingdom</option>
                        </Input>
                    </FormGroup>
                </div>

                <div className="row">
                    <FormGroup className="col-6">
                        <Label>Legal Company Full Name *</Label>
                        <Input type="text" placeholder="ABC Corporation" />
                    </FormGroup>
                    <FormGroup className="col-6">
                        <Label>Website URL *</Label>
                        <Input type="text" placeholder="abccorporation.com" />
                    </FormGroup>
                </div>

                <div className="row">
                    <FormGroup className="col">
                        <Label>Company Address *</Label>
                        <Input type="text" placeholder="Street, Brgy, City, Province" />
                    </FormGroup>
                </div>

                <div className="row">
                    <FormGroup className="col">
                        <Label>Company Size *</Label>
                        <div>
                            <CustomInput 
                                type="radio" 
                                id="sm" 
                                name="customRadio" 
                                label="1-10" 
                                inline 
                            />
                            <CustomInput 
                                type="radio" 
                                id="md" 
                                name="customRadio"
                                label="11-50" 
                                inline 
                            />
                            <CustomInput 
                                type="radio" 
                                id="lg" 
                                name="customRadio" 
                                label="51-100" 
                                inline 
                            />
                            <CustomInput 
                                type="radio" 
                                id="xl" 
                                name="customRadio"
                                label="101-500" 
                                inline 
                            />
                            <CustomInput 
                                type="radio" 
                                id="xxl" 
                                name="customRadio" 
                                label="500+" 
                                inline 
                            />
                        </div>
                    </FormGroup>
                </div>
            </Form>
        );
    }
}

export default CompanyInformation;