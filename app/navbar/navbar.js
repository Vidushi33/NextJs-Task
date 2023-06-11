"use client";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import React from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  display: "flex",

  marginLeft: 0,

  // left:'50%',
  // width: '5%',
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  // height: '100%',

  // position: 'absolute',
  pointerEvents: "none",
  alignItems: "center",
  justifyContent: "end",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "200%",
    [theme.breakpoints.up("sm")]: {
      width: "35ch",
    },
  },
}));

export default function Navbar() {
  const [down, setDown] = React.useState(false);
  const open = Boolean(down);
  const handleClick = () => {
    setDown(!down);
  };
  const handleClose = () => {
    setDown(!down);
  };

  return (
    <>
      <Box>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "black",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Start Bootstrap
            </Typography>
            <div style={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: 10 }}
              >
                <MenuIcon />
              </IconButton>
            </div>

            <Search>
              <StyledInputBase
                sx={{ color: "white" }}
                placeholder="Search for…"
                inputProps={{ "aria-label": "search" }}
              />

              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
            <IconButton
              size="large"
              edge="end"
              sx={{ mr: 5 }}
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <PersonIcon />
              <ArrowDropDownIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Menu
          anchorEl={down}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Activity Log</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </>
  );
}
