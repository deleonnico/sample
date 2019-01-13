import React, { Component } from "react";

import { FormGroup, FormText, Label, Input } from "reactstrap";

class Agreement extends Component {
    render() {
        return (
            <div>
                <FormGroup>
                    <h2>Agreement</h2>
                    <FormText color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</FormText>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />
                        <FormText color="muted">I have read and agree to the <a href="/TermsAndConditions" target="_blank">Terms of this Service</a> and <a href="/TermsAndConditions" target="_blank">Privacy Policy</a></FormText>
                    </Label>
                </FormGroup>
            </div>
        );
    }
}

export default Agreement;