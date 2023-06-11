"use client";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn,
  } from "mdb-react-ui-kit";
 
  import Navbar from "../navbar/navbar";
  import Sidebar from "../sidebar/sidebar";
  import Link from "next/link";
  import {useRouter} from 'next/router';
  
  export default function StaticNavigation(){
    // const router = useRouter()
    // console.log(router.asPath)
    // // const bgColor = () => {
    // //   if(router.asPath == '/light-sidenav')
    // //   {
    // //     return "rgb(0 0 0)"
    // //   }
    // //   else{
    // //     return "rgb(33 37 41)"
    // //   }
    // // }
    // let bgColor;
    // if(router.asPath == '/light-sidenav')
    //   {
    //     bgColor = "backgroundColor: rgb(0 0 0)"
    //   }
    //   else{
    //     bgColor =  "backgroundColor: rgb(33 37 41)"
    //   }
    //   console.log(bgColor)
    return(
        <div className="horizontal-overflow-hidden">
      <Navbar />

      <Grid container spacing={13} className="vh-100 scroll-l-36">
        <Grid xs={2}>
          <Sidebar />
        </Grid>
        <Grid xs={9} mdOffset={2} className="vh-100"> 
          <h1 class="text-4xl font-bold mb-3 ">Static Navigation</h1>

          <p class="mb-3">
            <Link href="/">Dashboard</Link>/ Static Navigation
          </p>
          <MDBCard className="mb-4">
            <MDBCardBody>
            This page is an example of using static navigation. By removing the .sb-nav-fixed class from the body , the top navigation and side navigation will become static on scroll. Scroll down this page to see an example.
              
              
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="mb-4" style ={{position: "absolute", bottom: "0px"}}>
            <MDBCardBody>
            When scrolling, the navigation stays at the top of the page. This is the end of the static navigation demo.
              
              
            </MDBCardBody>
          </MDBCard>
        
          
        
        </Grid>
      </Grid>
    </div>
    )
  }