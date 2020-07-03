import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import GlobalAppBar from "common/components/organisms/GlobalAppBar/GlobalAppBar";
import styles from "./GlobalAppTemplate.module.scss";

const GlobalAppTemplate = ({ children }) => {
  return (
    <div className={styles["global-app"]}>
      <GlobalAppBar />
      <Container className={styles["global-app-container"]}>
        {children}
      </Container>
    </div>
  );
};

GlobalAppTemplate.propTypes = {
  children: PropTypes.node,
};

export default GlobalAppTemplate;
