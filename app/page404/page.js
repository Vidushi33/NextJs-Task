

"use client";

import React from "react";
import { Card, Form, Button, Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

const Page404 = () => {
  return (
    <Container className="text-center mt-5 ">
        <img src="https://startbootstrap.github.io/startbootstrap-sb-admin/assets/img/error-404-monochrome.svg" className="img-fluid  mx-auto text-center" style={{maxWidth:300, height:"auto"}} alt="image" />
       <h4 className="mt-4">This requested URL was not found on this server.</h4>
        <Link href="/"><FontAwesomeIcon
                    icon={faArrowLeft}
                   
                  />Return to Dashboad</Link>

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
  );
};

export default Page404;
