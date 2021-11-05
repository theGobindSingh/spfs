import "./Contact.css";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Contact() {
  var [NAME, setName] = useState("");
  const inputName = (inp) => {
    setName(inp.target.value);
  };
  var [EMAIL, setEmail] = useState("");
  const inputEmail = (inp) => {
    setEmail(inp.target.value);
  };
  var [MSG, setMsg] = useState("");
  const inputMsg = (inp) => {
    setMsg(inp.target.value);
  };
  return (
    <div id="ContactDiv">
      <div className="ContactStart">
        <div>
          <h1>Contact Us!</h1>
          <p>Yes yes yes, you can obviously contact us duh.</p>
        </div>
      </div>
      <div className="ContactMain">
        <div className="ContactInfo">
          <p>email@provider.com</p>
          <br />
          <p>Address. This is where we're based.</p>
          <br />
          <p>+01 23456 78912</p>
          <p>+34 56789 12345</p>
        </div>
        <div className="ContactFormDiv">
          <Form>
            <Form.Group className="name mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Please enter your full name."
                onChange={inputName}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="email mb-3">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Please enter your e-mail address."
                onChange={inputEmail}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="message mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="message"
                as="textarea"
                rows={10}
                placeholder="Please type your message."
                onChange={inputMsg}
              ></Form.Control>
            </Form.Group>
            <Button
              variant="dark"
              onClick={() => {
                alert("Submitted!"); // Write submition logic here
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
