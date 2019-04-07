import React from "react";
//import PropTypes from 'prop-types';
import checkboxes from "./checkboxes";
import Checkbox from "./checkbox";

import { Container } from "reactstrap";
import { Row, Col } from "reactstrap";

import "./chkbox.css";
export class CheckboxContainer extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     checkedItems: new Map()
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(e) {
  //   const item = e.target.name;
  //   const isChecked = e.target.checked;
  //   this.setState(prevState => ({
  //     checkedItems: prevState.checkedItems.set(item, isChecked)
  //   }));
  //   console.log(e.target.checked);
  // }

  render() {
    return (
      <Container>
        <Row>
          <React.Fragment>
            {checkboxes.map(item => (
              <div className="chk_box_container" key={item.key}>
                <Col md={6} lg={6}>
                  <label className="chk_box_label" key={item.key}>
                    <Checkbox
                      name={"services.chosenServices." + item.key}
                      checked={this.props.chosenServices.get(item.key)}
                      onChange={this.props.onChange}
                    />
                    <span className="chk_box_text">{item.name}</span>
                  </label>
                </Col>
              </div>
            ))}
          </React.Fragment>
        </Row>
      </Container>
    );
  }
}
