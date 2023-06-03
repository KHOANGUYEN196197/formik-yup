import { FormGroup, Input, Label, Button } from "reactstrap";
import "../App.css";
import Select from "react-select";
import { Formik, Form, FastField } from "formik";
import InputField from "../custom-fields/input-fields";
import SelectField from "../custom-fields/select-fields";
import CheckboxField from "../custom-fields/checkbox-fields";
import RadioField from "../custom-fields/radio-fields";
import * as Yup from "yup";

const STATE_OPTION = [
  { value: 1, label: "Alone" },
  { value: 1, label: "Married" },
];
const GENDER_OPTION = [
  { value: 1, label: "Male" },
  { value: 1, label: "Female" },
  { value: 1, label: "Others" },
];
const VEHICLES = [
  { value: "bike", label: "Bike" },
  { value: "car", label: "Car" },
  { value: "boat", label: "Boat" },
];
const LANGUAGES = [
  { value: "python", label: "Python" },
  { value: "javaScript", label: "JavaScript" },
  { value: "java", label: "Java" },
];

function FormFormik() {
  const handleSubmit = (values) => {
    console.log("form Submit", values);
  };
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    stateId: null,
    zipcode: "",
    phone: "",
    dob: "",
    genderId: null,
    vehicles: [],
    language: "",
  };
  const validate = {
    firstName: Yup.string().required("This field is required."),
    lastName: Yup.string().required("This field is required."),
    email: Yup.string().email().required("This field is required."),
    password: Yup.string().required("This field is required."),
    address: Yup.string().required("This field is required."),
    city: Yup.string().required("This field is required."),
    stateId: Yup.string().required("This field is required."),
    zipcode: Yup.number().required("This field is required."),
    phone: Yup.number("nhap so").required("This field is required."),
    dob: Yup.string().required("This field is required."),
    genderId: Yup.string().required("This field is required."),
    vehicles: Yup.array().min(1).required("Select at least one vehicle"),
    language: Yup.string().required("Select a language."),
  };
  const validationSchema = Yup.object(validate);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        return (
          <div className="box">
            <div className="box-wrap">
              <Form>
                <FastField
                  name="firstName"
                  component={InputField}
                  type="text"
                  placeholder="input first name ..."
                  disabled={false}
                  id="firstName"
                  label="First Name"
                />
                <FastField
                  name="lastName"
                  component={InputField}
                  type="text"
                  placeholder="input last name ..."
                  disabled={false}
                  id="lastName"
                  label="Last Name"
                />
                <FastField
                  name="email"
                  component={InputField}
                  type="email"
                  placeholder="input email ..."
                  disabled={false}
                  id="email"
                  label="Email"
                />
                <FastField
                  name="password"
                  component={InputField}
                  type="password"
                  placeholder="input password ..."
                  disabled={false}
                  id="password"
                  label="Password"
                />
                <FastField
                  name="address"
                  component={InputField}
                  type="text"
                  placeholder="input address ..."
                  disabled={false}
                  id="address"
                  label="Address"
                />
                <FastField
                  name="city"
                  component={InputField}
                  type="text"
                  placeholder="input city ..."
                  disabled={false}
                  id="city"
                  label="City"
                />
                <FastField
                  name="stateId"
                  component={SelectField}
                  label="State"
                  placeholder="choose state"
                  options={STATE_OPTION}
                />
                <FastField
                  name="zipcode"
                  component={InputField}
                  type="number"
                  placeholder="input zip code ..."
                  disabled={false}
                  id="zipcode"
                  label="Zip Code"
                />
                <FastField
                  name="phone"
                  component={InputField}
                  type="number"
                  placeholder="input phone ..."
                  disabled={false}
                  id="phone"
                  label="Phone"
                />
                <FastField
                  name="dob"
                  component={InputField}
                  type="date"
                  placeholder="input Date of Birth ..."
                  disabled={false}
                  id="dob"
                  label="Date of Birth"
                />
                <FastField
                  name="genderId"
                  component={SelectField}
                  label="Gender"
                  placeholder="choose gender"
                  options={GENDER_OPTION}
                />
                <FastField
                  name="vehicles"
                  component={CheckboxField}
                  label="I Have"
                  options={VEHICLES}
                />
                <FastField
                  name="language"
                  component={RadioField}
                  label="I Choose"
                  options={LANGUAGES}
                />

                <FormGroup style={{ textAlign: "end" }}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </FormGroup>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
export default FormFormik;
