import React from "react";
import { Label, Container, Row, Col } from "reactstrap";

export class CompanySelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companyId: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const chosenId = e.currentTarget.value;
    this.setState({ companyId: chosenId });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <React.Fragment>
              <Label for="companysSelect">Välj Kontor</Label>
              <select
                onChange={this.props.onChange}
                name="services.company"
                value={this.props.company}
                className="form-control"
              >
                {this.props.options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </React.Fragment>
          </Col>
        </Row>
      </Container>
    );
  }
}
