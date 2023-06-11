"use client";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/system";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IconButton from "@mui/material/IconButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';

const DashboardCard = () => {
    return (
      <Grid container spacing={2}>
        <Grid xs={3}>
        <MDBCard background="primary">
        
        <MDBCardBody>
          <MDBCardText className="text-light">Primary Card</MDBCardText>
         
          
        </MDBCardBody>
        <MDBCardFooter >
          <Link href="#" className='text-light' >View Details</Link>
          
          <NavigateNextIcon className='text-light'/>
          
        
        </MDBCardFooter>
        
                
                  
              
      </MDBCard>
        </Grid>
        <Grid xs={3}>
        <MDBCard background="warning">
        
        <MDBCardBody>
          <MDBCardText className="text-light">Warning Card</MDBCardText>
         
          
        </MDBCardBody>
        <MDBCardFooter >
          <Link href="#" className='text-light' >View Details</Link>
          
          <NavigateNextIcon className='text-light'/>
          
        
        </MDBCardFooter>
        
                
                  
              
      </MDBCard>
        </Grid>
        <Grid xs={3}>
        <MDBCard background="success">
        
        <MDBCardBody>
          <MDBCardText className="text-light">Success Card</MDBCardText>
         
          
        </MDBCardBody>
        <MDBCardFooter >
          <Link href="#" className='text-light' >View Details</Link>
          
          <NavigateNextIcon className='text-light'/>
          
        
        </MDBCardFooter>
        
                
                  
              
      </MDBCard>
        </Grid>
        <Grid xs={3} >
        <MDBCard background="danger">
        
        <MDBCardBody>
          <MDBCardText className="text-light">Danger Card</MDBCardText>
         
          
        </MDBCardBody>
        <MDBCardFooter >
          <Link href="#" className='text-light' >View Details</Link>
          
          <NavigateNextIcon className='text-light'/>
          
        
        </MDBCardFooter>
        
                
                  
              
      </MDBCard>
        </Grid>
  
      </Grid>
    );
  };

  export default function Card(){
    return(
        <>
        <h1 class="text-4xl font-bold mb-3 ">DASHBOARD</h1>

<h4 class = "mb-3">Dashboard</h4>

<DashboardCard />
        
        </>
    )
  }
