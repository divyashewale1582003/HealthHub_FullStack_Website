import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function ContactUs() {
  const [validated, setValidated] = useState(false);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = (event) => {
    const mydata = {
      name: name,
      email: email,
      Phonenumber: Phonenumber,
      desc: desc,
    };

    axios
      .post("http://localhost:8000/register", mydata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={{
        marginInlineEnd: "50%",
        marginInlineStart: "-0%",
        marginLeft: "1%",
        marginRight: "0.0020%",
        marginTop: "20px",
        marginBottom: "20px",
        borderRadius: "10px",
        border: "5px solid Red",
      }}
    >
      <h1>Contact Us</h1>
      <Col className="mb-3">
        <Form.Group as={Col} md="60" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="60" controlId="validationCustom02">
          <Form.Control
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="60" controlId="validationCustomUsername">
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="Phone"
              aria-describedby="inputGroupPrepend"
              value={Phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </InputGroup>
          <Form.Group as={Col} md="60" controlId="validationCustom01">
            <Form.Control
              required
              type="text"
              placeholder="Ask Something"
              value={desc}
              onChange={(e) => setdesc(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Group>
      </Col>

      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default ContactUs;
