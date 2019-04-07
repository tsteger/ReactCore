import React, { Component } from "react";
import { Container } from "reactstrap";
import { Row, Col } from "reactstrap";
import TextArea from "./textarea";
import Label from "../Label/Label";

class TextAreaContainer extends Component {
  render() {
    return (
      <Container>
        <Row>
          <React.Fragment>
            <Col md={12} lg={12}>
              <div className="form-group">
                <Label htmlFor="other" label="Övrigt" />
                <TextArea
                  name="services.other"
                  value={this.props.other}
                  onChange={this.props.onChange}
                />
              </div>
            </Col>
          </React.Fragment>
        </Row>
      </Container>
    );
  }
}
export default TextAreaContainer;
