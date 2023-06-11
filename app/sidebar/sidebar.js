"use client";
import React from "react";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Collapse from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";

const drawerWidth = 240;

export default function Sidebar() {
  const [down, setDown] = React.useState(false);
  const [seconddown, setSecondDown] = React.useState(false);
  const open = Boolean(down);
  const open1 = Boolean(seconddown);
  const handleClick = () => {
    setDown(!down);
  };
  const handleClose = () => {
    setDown(!down);
  };
  const handleClick1 = () => {
    setSecondDown(!seconddown);
  };
  const handleClose1 = () => {
    setSecondDown(!seconddown);
  };

  

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            overflow: "auto",
            backgroundColor: "rgb(33 37 41)",
            height: "100%",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <List>
            <ListItem>CORE</ListItem>

            <ListItem disablePadding sx={{ ml: 0 }}>
              <ListItemButton sx={{ [`&:hover`]: { color: "white" } }}>
                <Link href = "/" style={{ textDecoration: "none", color: "white" }}>
                
                <ListItemIcon sx={{ minWidth: "25px" }}>
                  
                  <FontAwesomeIcon
                    icon={faGaugeHigh}
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  />
                </ListItemIcon>
                Dashboard
                <ListItemText />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>

          <br />

          <List>
            <ListItem>INTERFACE</ListItem>

            <ListItem
              disablePadding
              sx={{ ml: 0 }}
              class="hover:text-black"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <ListItemButton sx={{ [`&:hover`]: { color: "white" } }}>
                <ListItemIcon sx={{ minWidth: "25px" }}>
                  <FontAwesomeIcon
                    icon={faTableColumns}
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  />
                </ListItemIcon>
                Layouts
                <ListItemText />
                <ListItemIcon
                  sx={{ ml: 4 }}
                  style={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                  <NavigateNextIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ ml: 0 }}
              class="hover:text-black"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick1}
            >
              <ListItemButton sx={{ [`&:hover`]: { color: "white" } }}>
                <ListItemIcon sx={{ minWidth: "25px" }}>
                  <FontAwesomeIcon
                    icon={faBookOpen}
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  />
                </ListItemIcon>
                Pages
                <ListItemText />
                <ListItemIcon
                  sx={{ ml: 4 }}
                  style={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                  <NavigateNextIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>

          <br />

          <List>
            <ListItem>ADDONS</ListItem>

            <ListItem disablePadding sx={{ ml: 0 }} class="hover:text-black">
              <ListItemButton sx={{ [`&:hover`]: { color: "white" } }}>
              <Link href = "/chart" style={{ textDecoration: "none", color: "white" }}>
                <ListItemIcon sx={{ minWidth: "25px" }}>
                  <FontAwesomeIcon
                    icon={faChartArea}
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  />
                </ListItemIcon>
                Charts
                <ListItemText />
                </Link>

              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ ml: 0 }} class="hover:text-black">
              <ListItemButton sx={{ [`&:hover`]: { color: "white" } }}>
              <Link href = "/table" style={{ textDecoration: "none", color: "white" }}>
                <ListItemIcon sx={{ minWidth: "25px" }}>
                  <FontAwesomeIcon
                    icon={faTable}
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  />
                </ListItemIcon>
                Tables
                <ListItemText />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        <Menu
          id="basic-menu"
          anchorEl={down}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          transformOrigin={{ horizontal: "left", vertical: "bottom" }}
          anchorOrigin={{ horizontal: "left", vertical: "top" }}
        >
          <MenuItem><Link href = "/static-navigation" style={{ textDecoration: "none", color: "black" }}>Static Navigation</Link></MenuItem>
          <MenuItem ><Link href = "/light-sidenav" style={{ textDecoration: "none", color: "black" }}>Light SideNav</Link></MenuItem>
          
        </Menu>
        <Menu
          id="basic-menu"
          anchorEl={seconddown}
          open={open1}
          onClose={handleClose1}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          transformOrigin={{ horizontal: "left", vertical: "bottom" }}
          anchorOrigin={{ horizontal: "left", vertical: "top" }}
        >
          <MenuItem ><Link href = "/login" style={{ textDecoration: "none", color: "black" }}>Login</Link></MenuItem>
          <MenuItem ><Link href = "/register" style={{ textDecoration: "none", color: "black" }}>Register</Link></MenuItem>
          <MenuItem><Link href = "/forget-password" style={{ textDecoration: "none", color: "black" }}>Forget Password</Link></MenuItem>
          <MenuItem><Link href = "/401" style={{ textDecoration: "none", color: "black" }}>401 Page</Link></MenuItem>
          <MenuItem ><Link href = "/page404" style={{ textDecoration: "none", color: "black" }}>404 Page</Link></MenuItem>
          <MenuItem ><Link href = "/500" style={{ textDecoration: "none", color: "black" }}>500 Page</Link></MenuItem>
        </Menu>
      </Drawer>
    </>
  );
}