import React from "react";
// import { Form, Button } from "react-bootstrap/Form";
import { Form, Button } from "react-bootstrap";
const Registration = () => {
  return (
    <div
      style={{
        marginTop: "40px",
        border: "20px",
      }}
      className="container d-flex justify-content-center allignment-item-center"
    >
      <td>
        <Form
          style={{
            border: "2px solid red",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "lightgray",
          }}
        >
          <h1>Appointment Form</h1>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Phone Number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control type="Number" placeholder="Age" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control type="password" rows={3} placeholder="Set Password" />
          </Form.Group> */}

          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              rows={3}
              placeholder="Conform Password"
            />
          </Form.Group> */}
          <Button
            variant="primary"
            type="submit"
            className="button d-flex justify-content-center"
          >
            Register Now
          </Button>
        </Form>
      </td>
    </div>
  );
};

export default Registration;
