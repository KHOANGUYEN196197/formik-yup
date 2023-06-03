import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { ErrorMessage } from "formik";

function CheckboxField(props) {
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
            type="checkbox"
            value={option.value}
            checked={value.includes(option.value)}
            invalid={showError}
          />
          &nbsp;
          {option.label}
        </FormGroup>
      ))}
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

CheckboxField.propTypes = {
  field: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string,
};

export default CheckboxField;
