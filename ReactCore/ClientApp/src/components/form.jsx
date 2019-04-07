import { Component } from "react";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  //   handleChange(e) {
  //     const item = e.target.name;
  //     const isChecked = e.target.checked;
  //     this.setState(prevState => ({
  //       checkedItems: prevState.checkedItems.set(item, isChecked)
  //     }));
  //     console.log(e.target.checked);
  //   }

  handleCheckboxChange = ({ currentTarget: checkBox }) => {
    const data = { ...this.state.data };
    const [formSection, propertyName, itemName] = checkBox.name.split(".");
    const isChecked = checkBox.checked;

    const checkedItems = data[formSection][propertyName];
    checkedItems.set(itemName, isChecked);

    this.setState({ data: data });
  };

  handleSelectChange = ({ currentTarget: selectBox }) => {
    const data = { ...this.state.data };
    const chosenValue = selectBox.value;
    const [formSection, propertyName] = selectBox.name.split(".");
    data[formSection][propertyName] = chosenValue;
    this.setState({ data: data });
  };

  handleTextAreaChange = ({ currentTarget: textarea }) => {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    const [formSection, propertyName] = textarea.name.split(".");

    // const errorMessage = this.validateProperty(textarea);

    // if (errorMessage) {
    //   errors[textarea.name] = errorMessage;
    // } else {
    //   delete errors[textarea.name];
    // }

    data[formSection][propertyName] = textarea.value;

    this.setState({ data, errors });
  };
}

export default Form;
