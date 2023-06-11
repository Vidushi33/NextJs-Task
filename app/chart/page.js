"use client";
import Grid from "@mui/material/Unstable_Grid2";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Chart } from "chart.js";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import Link from "next/link";


export default function Charts() {
  useEffect(() => {
    var ctx = document.getElementById("myChart");
    var myLineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Mar 1",
          "Mar 2",
          "Mar 3",
          "Mar 4",
          "Mar 5",
          "Mar 6",
          "Mar 7",
          "Mar 8",
          "Mar 9",
          "Mar 10",
          "Mar 11",
          "Mar 12",
          "Mar 13",
        ],
        datasets: [
          {
            label: "Sessions",
            lineTension: 0.3,
            backgroundColor: "rgba(2,117,216,0.2)",
            borderColor: "rgba(2,117,216,1)",
            pointRadius: 5,
            pointBackgroundColor: "rgba(2,117,216,1)",
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(2,117,216,1)",
            pointHitRadius: 50,
            pointBorderWidth: 2,
            data: [
              10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849,
              24159, 32651, 31984, 38451,
            ],
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              time: {
                unit: "date",
              },
              gridLines: {
                display: false,
              },
              ticks: {
                maxTicksLimit: 7,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 40000,
                maxTicksLimit: 5,
              },
              gridLines: {
                color: "rgba(0, 0, 0, .125)",
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });

    var ctx1 = document.getElementById("myChart1");
    var myLineChart = new Chart(ctx1, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Revenue",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            data: [4215, 5312, 6251, 7841, 9821, 14984],
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              time: {
                unit: "month",
              },
              gridLines: {
                display: false,
              },
              ticks: {
                maxTicksLimit: 6,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 15000,
                maxTicksLimit: 5,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });

    var ctx2 = document.getElementById("myChart2");
    var myPieChart = new Chart(ctx2, {
      type: "pie",
      data: {
        labels: ["Blue", "Red", "Yellow", "Green"],
        datasets: [
          {
            data: [12.21, 15.58, 11.25, 8.32],
            backgroundColor: ["#007bff", "#dc3545", "#ffc107", "#28a745"],
          },
        ],
      },
    });
  }, []);

  const LineShade = () => {
    return (
      <Grid container spacing={2}>
        <Grid sx={12} lg={12}>
          <MDBCard>
            <MDBCardHeader>
              <FontAwesomeIcon
                icon={faChartArea}
                style={{ color: "black", marginRight: 10 }}
              />
              Area Chart Example
            </MDBCardHeader>
            <MDBCardBody>
              <div class="card-body">
                <canvas id="myChart" width="100" height="40"></canvas>
              </div>
            </MDBCardBody>
            <MDBCardFooter>Updated yesterday at 11:59 PM</MDBCardFooter>
          </MDBCard>
        </Grid>

        <Grid sx={6} lg={6}>
          <MDBCard>
            <MDBCardHeader>
              <FontAwesomeIcon
                icon={faChartBar}
                style={{ color: "black", marginRight: 10 }}
              />
              Bar Chart Example
            </MDBCardHeader>
            <MDBCardBody>
              <div class="card-body">
                <canvas id="myChart1" width="100%" height="40"></canvas>
              </div>
            </MDBCardBody>
            <MDBCardFooter>Updated yesterday at 11:59 PM</MDBCardFooter>
          </MDBCard>
        </Grid>

        <Grid sx={6} lg={6}>
          <MDBCard>
            <MDBCardHeader>
              <FontAwesomeIcon
                icon={faChartBar}
                style={{ color: "black", marginRight: 10 }}
              />
              Bar Chart Example
            </MDBCardHeader>
            <MDBCardBody>
              <div class="card-body">
                <canvas id="myChart2" width="100%" height="40"></canvas>
              </div>
            </MDBCardBody>
            <MDBCardFooter>Updated yesterday at 11:59 PM</MDBCardFooter>
          </MDBCard>
        </Grid>
      </Grid>
    );
  };

  return (
    <div className="horizontal-overflow-hidden">
      <Navbar />

      <Grid container spacing={13} className="vh-100">
        <Grid xs={2}>
          <Sidebar />
        </Grid>
        <Grid xs={9} mdOffset={2} className="vh-100"> 
          <h1 class="text-4xl font-bold mb-3 ">Charts</h1>

          <p class="mb-3">
            <Link href="/">Dashboard</Link>/ Charts
          </p>
          <MDBCard className="mb-4">
            <MDBCardBody>
              Chart.js is a third party plugin that is used to generate the
              charts in this template. The charts below have been customized -
              for further customization options, please visit the official{" "}
              <Link href="https://www.chartjs.org/docs/latest/">
                Chart.js documentation
              </Link>
              .
            </MDBCardBody>
          </MDBCard>

          <LineShade />
         
        </Grid>
      </Grid>
    </div>
  );
}
