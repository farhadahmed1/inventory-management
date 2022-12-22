import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 180;
const pages = ["user", "product", "brand", "stores", "suppliers"];

const Navbar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          background: "white",
          color: "black",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Avatar
          style={{
            margin: "1rem auto",
            // padding: "0.1rem",
          }}
          alt="Farhad Ahmed"
          src="https://i.ibb.co/rx5DFbs/avatar.png"
        />

        <Typography
          style={{
            paddingBottom: "0.5rem",
          }}
          variant="p"
        >
          {"Farhad Ahmed"}
        </Typography>
        <Divider />
        <List>
          {pages.map((pages) => (
            <ListItem key={pages} disablePadding>
              <ListItemButton>
                <ListItemText>
                  <Link
                    style={{ textDecoration: "none", color: "Black" }}
                    to={`/${pages}`}
                  >
                    {pages}
                  </Link>
                </ListItemText>

                {/* <ListItemText primary={pages} /> */}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
