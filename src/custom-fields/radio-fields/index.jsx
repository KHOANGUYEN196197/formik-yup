import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { ErrorMessage } from "formik";

function RadioField(props) {
  const { field, form, options, label } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      {label && <Label>{label}</Label>}
      {options.map((option) => (
        <FormGroup key={option.value}>
          <Input
            {...field}
            type="radio"
            value={option.value}
            checked={value === option.value}
            invalid={showError}
          />
          {option.label}
        </FormGroup>
      ))}
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

RadioField.propTypes = {
  field: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string,
};

export default RadioField;
