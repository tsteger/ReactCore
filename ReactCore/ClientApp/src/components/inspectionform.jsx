import React from "react";
import { CheckboxContainer } from "./chkbox/CheckboxContainer";
import TextAreaContainer from "./textarea/TextAreaContainer";
import { CompanySelect } from "./selectbox/companySelect";
import Form from "./form";

class InspectionForm extends Form {
  state = {
    data: {
      services: {
        chosenServices: new Map(),
        other: "",
        company: ""
      }
    },
    anticimexCompanies: [
      { label: "Anticimex Malmö", value: 1 },
      { label: "Anticimex Nässjö", value: 2 },
      { label: "Anticimex Stockholm", value: 3 }
    ]
  };

  componentDidMount() {
    const data = { ...this.state.data };
    //TODO: Tilldela värdet från hämtad mäklardata
    data.services.company = this.state.anticimexCompanies[0].value;
    this.setState({ data: data });
  }

  render() {
    const { services } = this.state.data;
    return (
      <React.Fragment>
        <CheckboxContainer
          onChange={this.handleCheckboxChange}
          chosenServices={this.state.data.services.chosenServices}
        />
        <CompanySelect
          company={services.company}
          options={this.state.anticimexCompanies}
          onChange={this.handleSelectChange}
        />
        <TextAreaContainer
          other={services.other}
          onChange={this.handleTextAreaChange}
        />
      </React.Fragment>
    );
  }
}

export default InspectionForm;
