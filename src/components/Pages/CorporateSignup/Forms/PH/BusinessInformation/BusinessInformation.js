import React, { Component } from "react";

import { Form, FormGroup, FormText, Label, Input, CustomInput } from "reactstrap";

class BusinessInformation extends Component {
    render() {
        return (
            <Form className="business-information">
                <FormGroup>
                    <h2>Business Information</h2>
                    <FormText color="muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo elit ut diam ornare elementum vel at dui.
                    </FormText>
                </FormGroup>

                <div className="row">
                    <FormGroup className="col-6">
                        <Label>Doing Business Name *</Label>
                        <Input type="text" placeholder="ABC Corp." />
                    </FormGroup>
                    <FormGroup className="col-6">
                        <Label>Company's VAT Number *</Label>
                        <Input type="text" placeholder="#1234" />
                    </FormGroup>
                </div>

                <div className="row">
                    <FormGroup className="col-6">
                        <Label>Company's Registration Number *</Label>
                        <Input type="text" placeholder="RN540" />
                    </FormGroup>
                    <FormGroup className="col-6">
                        <Label>Label</Label>
                        <Input type="text" placeholder="Label" />
                    </FormGroup>
                </div>

                <div className="row">
                    <FormGroup className="col-6">
                        <Label>Core Business *</Label>
                        <Input type="text" placeholder="Core business" />
                    </FormGroup>
                    <FormGroup className="col-6">
                        <Label>Business Type *</Label>
                        <Input type="select">
                            <option>Privately Owned</option>
                            <option>Service Business</option>
                            <option>Corporation</option>
                        </Input>
                    </FormGroup>
                </div>

                <div className="row">
                    <FormGroup className="col-6">
                        <Label>Company's Certifiate of Incorporation *</Label>
                        <CustomInput 
                            type="file" 
                            id="certificate-of-incorporation" 
                            name="customFile" 
                        />
                    </FormGroup>
                    <FormGroup className="col-6">
                        <Label>Company's Articles of Incorporation and By-Laws *</Label>
                        <CustomInput 
                            type="file" 
                            id="articles-of-incorporation-and-by-laws" 
                            name="customFile" 
                        />
                    </FormGroup>
                </div>
            </Form>
        );
    }
}

export default BusinessInformation;