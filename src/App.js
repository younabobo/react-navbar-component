import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { PersonPin, Phone, Favorite, Menu } from "@material-ui/icons";
// import {} from "@material-ui/icons"
const items = [
  {
    label: "Hello",
    icon: <Menu />,
    tooltip: "Hello world",
    path: "Hello"
  },
  {
    label: "Person",
    icon: <Phone />,
    tooltip: "Hello world",
    path: "Person"
  },
  {
    label: "Phone",
    icon: <Favorite />,
    tooltip: "Mobile",
    path: "Phone"
  },
  {
    label: "Favorite",
    icon: <PersonPin />,
    tooltip: "Favorite",
    path: "Favorite"
  }
];

export default function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between"
            // backgroundColor: "#DDD"
          }}
        >
          <p />
          <Navbar items={items} />
        </Toolbar>
      </AppBar>
    </Router>
  );
}
