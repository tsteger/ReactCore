import React from "react";
import PropTyps from "prop-types";

/** Label with requierd feld display, htmlFor, and block styling */
function Label({ htmlFor, label, required }) {
  return (
    <label style={{ display: "block" }} htmlFor={htmlFor}>
      {label} {required && <span style={{ color: "red" }}> *</span>}
    </label>
  );
}

Label.PropTyps = {
  htmlFor: PropTyps.string.isRequired,
  label: PropTyps.string.isRequired,
  requierd: PropTyps.bool
};

export default Label;
