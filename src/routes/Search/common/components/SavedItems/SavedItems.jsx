import React, { memo } from "react";
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "./SavedItems.module.scss";

const SavedItems = ({ data }) => {
  if (!data.length) return null;
  return (
    <List>
      {data.map((item) => (
        <ListItem key={`saved-item-${item.id}`}>
          <Link
            href={item.pageURL}
            target="_blank"
            rel="noopener"
            variant="body1"
          >
            #{item.id}{" "}
            <OpenInNewIcon
              fontSize="small"
              className={styles["saved-items-icon"]}
            />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

SavedItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default memo(SavedItems);
