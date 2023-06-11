"use client";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useMemo, useState } from "react";
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
  import { usePathname } from 'next/navigation';
  
  export default function LightSideNav(){
    // const router = useRouter()
    // console.log("========", usePathname())
    // const bgColor = () => {
    //   if(router.asPath == '/light-sidenav')
    //   {
    //     return "rgb(0 0 0)"
    //   }
    //   else{
    //     return "rgb(33 37 41)"
    //   }
    // }
    // const [color,setColor] = useState("backgroundColor: rgb(33 37 41)")
    // let path = usePathname()
    // const bgColor = () =>{
    //     if(path == '/light-sidenav')
    //   {
    //     setColor("backgroundColor: rgb(255 255 255) !important")
    //   }
    // }
    
     
    //   console.log(bgColor)
    return(
        <div className="horizontal-overflow-hidden">
      <Navbar />

      <Grid container spacing={13} className="vh-100 scroll-l-36">
        <Grid xs={2}>
          <Sidebar />
        </Grid>
        <Grid xs={9} mdOffset={2} className="vh-100"> 
          <h1 class="text-4xl font-bold mb-3 ">SideNav Light</h1>

          <p class="mb-3">
            <Link href="/">Dashboard</Link>/ SideNav Light
          </p>
          <MDBCard className="mb-4">
            <MDBCardBody>
            This page is an example of using the light side navigation option. By appending the .sb-sidenav-light class to the .sb-sidenav class, the side navigation will take on a light color scheme. The .sb-sidenav-dark is also available for a darker option.
              
              
            </MDBCardBody>
          </MDBCard>

         
          
        
        </Grid>
      </Grid>
    </div>
    )
  }