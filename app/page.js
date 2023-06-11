"use client";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";
import Card from "./cards/card";
import Charts from "./charts/charts";
import Tables from "./tables/tables";
import Grid from "@mui/material/Unstable_Grid2";



export default function Home() {
  return (
    <div style={{overflow:"hidden"}}>
      {/* <Component /> */}
     
          <Navbar />
       
          <Grid container spacing={13} >
            <Grid xs={2}>
              <Sidebar />
            </Grid>
            <Grid xs={9} mdOffset={2} >
              <Card />
              <br />
              
              <Charts />
              <br />
            <Tables />
             
            </Grid>
          </Grid>
        
    </div>
  );
}
