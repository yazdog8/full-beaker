import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ToggleSwitch from "common/components/atoms/ToggleSwitch/ToggleSwitch";
import ThemeContext from "common/themes/ThemeContext/ThemeContext";
import styles from "./GlobalAppBar.module.scss";

const GlobalAppBar = (props) => {
  const { setTheme } = useContext(ThemeContext);
  const switchChange = (e) => setTheme(e.target.checked ? "dark" : "light");
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          className={styles["global-app-bar-typography"]}
        >
          Full Beaker
        </Typography>
        <ToggleSwitch onChange={switchChange} />
      </Toolbar>
    </AppBar>
  );
};

export default GlobalAppBar;
