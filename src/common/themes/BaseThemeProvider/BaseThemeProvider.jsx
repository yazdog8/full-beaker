import React, { useState } from "react";
import classNames from "classnames";
import ThemeContext, {
  baseThemeContext,
} from "common/themes/ThemeContext/ThemeContext";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import styles from "./BaseThemeProvider.module.scss";

const BaseThemeProvider = ({ children }) => {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  return (
    <ThemeContext.Provider
      value={{
        theme: baseThemeContext,
        setTheme: () => {
          handleThemeChange();
        },
      }}
    >
      <div className={classNames(styles["main"], palletType)}>
        <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
      </div>
    </ThemeContext.Provider>
  );
};

export default BaseThemeProvider;
