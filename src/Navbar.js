import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Tabs,
  Tab,
  Icon,
  Drawer,
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

/**
 * Generic Navigation bar component that gets its description from props
 */

function Navbar({ items }) {
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
        <Tooltip title={tooltip} key={path}>
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
              <Tooltip title={tooltip} key={path}>
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

Navbar.propTypes = {
  /**
   * The list of items to display in the navigation bar
   */
  items: PropTypes.arrayOf(
    /**
     * Navigation item
     */
    PropTypes.shape({
      /**
       * The label of the navigation item
       */
      label: PropTypes.string,
      /**
       * The Icon component
       */
      icon: PropTypes.element,
      /**
       * The tooltip/abbreviation to display upon hovering the navigation item
       */
      tooltip: PropTypes.string,
      /**
       * The path/URL to the target
       */
      path: PropTypes.string
    })
  ).isRequired
};
export default Navbar;
