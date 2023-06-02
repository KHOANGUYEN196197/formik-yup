import { FormGroup, Input, Form, Label, Button } from "reactstrap";
import "../App.css";
import Select from "react-select";

function FormFormik() {
  const handleSubmit = () => {
    console.log("form Submit");
  };
  return (
    <div className="box">
      <div className="box-wrap">
        <Form>
          <FormGroup>
            <Label>First Name</Label>
            <Input id="firstName" type="text"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input id="lastName" type="text"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input id="email" type="email"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input id="password" type="password" />
          </FormGroup>
          <FormGroup>
            <Label>Address</Label>
            <Input id="address" type="text"></Input>
          </FormGroup>
          <FormGroup>
            <Label>City</Label>
            <Input id="city" type="text"></Input>
          </FormGroup>
          <FormGroup>
            <Label>State</Label>
            <Select id="state" />
          </FormGroup>
          <FormGroup>
            <Label>Zip Code</Label>
            <Input id="zipcode" type="number"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Phone</Label>
            <Input id="phone" type="number"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Date of Birth</Label>
            <Input id="dob" type="date"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Gender</Label>
            <Select id="gender" />
          </FormGroup>
          <FormGroup>
            <Label>I Have</Label> <br />
            <Input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <Label for="vehicle1"> I have a bike</Label>
            <Input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <Label for="vehicle2"> I have a car</Label>
            <Input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <Label for="vehicle3"> I have a boat</Label>
          </FormGroup>
          <FormGroup>
            <Label>Chose Language</Label> <br />
            <Input
              type="radio"
              id="Python"
              name="fav_language"
              value="Python"
            />
            <Label>Python</Label>
            <Input
              type="radio"
              id="Java script"
              name="fav_language"
              value="JavaScript"
            />
            <Label>Java script</Label>
            <Input type="radio" id="Java" name="fav_language" value="Java" />
            <Label>Java</Label>
          </FormGroup>

          <FormGroup style={{ textAlign: "end" }}>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
export default FormFormik;
