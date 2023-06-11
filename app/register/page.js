"use client";

import React from "react";
import { Card, Form, Button, Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBCheckbox } from "mdb-react-ui-kit";
import Link from "next/link";

const Register = () => {
  return (
    <div className="bg-primary vh-100">
      <Container className="pt-5">
        <Card className="w-50 mx-auto my-auto ">
          <Card.Header className="p-5 text-center ">
            <h3>Create Account</h3>
          </Card.Header>
          <Card.Body>
            <Form>
                <div className="d-flex ">
                <Form.Group controlId="formBasicName">
                <Form.Control
                  className="p-3 mb-4 "
                  type="name"
                  placeholder="First Name"
                />
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Control
                  className="p-3 mb-4 ml-4"
                  type="lastNae"
                  placeholder="Last Name"
                />
              </Form.Group>
                </div>
                <Form.Group controlId="formBasicEmail">
                <Form.Control
                  className="p-3 mb-4"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <div className="d-flex">
                <Form.Group controlId="formBasicPassword">
                <Form.Control
                  className="p-3 mb-4"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Control
                  className="p-3 mb-4 ml-4"
                  type="confirmPassword"
                  placeholder="Confirm Password"
                />
              </Form.Group>
                </div>
              

            
             
                
                <Button variant="primary" type="submit" className="w-full">
                  Create Account 
                </Button>
              
            </Form>
          </Card.Body>
          <Card.Footer className="text-center p-3">
            <Link href="/login">Have an account, Go to Login</Link>
          </Card.Footer>
        </Card>
        <Navbar
          fixed="bottom"
          bg="light"
          variant="dark"
          className="d-flex justify-content-between"
        >
          <span className="text-dark ml-3 p-3">
            Copyright © Your Website 2023
          </span>
          <div className="mr-3 ">
            <Link href="#" className="mr-3">
              Privacy Policy
            </Link>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </Navbar>
      </Container>
    </div>
  );
};

export default Register;
