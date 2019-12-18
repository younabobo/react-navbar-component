import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Icon,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useWindowSize from "./useWindowSize";
import { Menu } from "@material-ui/icons";

export default function NavBar({ items }) {
  //The current tab
  const [value, setValue] = React.useState(0);
  //Is drawer opened?
  const [open, setOpen] = useState(false);
  const size = useWindowSize();

  return size.width > 1023 ? (
    <Tabs
      variant="scrollable"
      value={value}
      onChange={(ev, val) => setValue(val)}
      // variant="fullWidth"
      indicatorColor="secondary"
      textColor="secondary"
      aria-label="icon label tabs example"
      scrollButtons="on"
    >
      {items.map(({ label, icon, Tooltip: tooltip = "", path }) => (
        <Tooltip title={tooltip}>
          <Tab
            icon={<Icon>{icon}</Icon>}
            label={size.width > parseInt(200 * items.length) ? label : ""}
            to={`${path}`}
            component={Link}
          />
        </Tooltip>
      ))}
    </Tabs>
  ) : (
    <div>
      <Tooltip title="Navigation Menu">
        <Tab icon={<Menu />} onClick={() => setOpen(true)} />
      </Tooltip>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
          <List>
            {items.map(({ label, icon, Tooltip: tooltip = "", path }) => (
              <Tooltip title={tooltip}>
                <ListItem button to={`${path}`} component={Link} key={label}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={label} />
                </ListItem>
              </Tooltip>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}
