"use client";

import React from "react";
import { Card, Form, Button, Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBCheckbox } from "mdb-react-ui-kit";
import Link from "next/link";

const Login = () => {
  return (
    <div className="bg-primary vh-100">
      <Container className="pt-5">
        <Card className="w-50 mx-auto my-auto ">
          <Card.Header className="p-5 text-center ">
            <h3>Login</h3>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  className="p-3 mb-4"
                  type="email"
                  placeholder="Email Address"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  className="p-3 mb-4"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember Password"
              />
              <div className="d-flex justify-content-between mt-3">
                <Link href="/forget-password">Forgot Password?</Link>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </Card.Body>
          <Card.Footer className="text-center p-3">
            <Link href="/register">Need an account? Sign up!</Link>
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

export default Login;
