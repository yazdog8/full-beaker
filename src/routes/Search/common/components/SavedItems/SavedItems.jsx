import React, { memo } from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const SavedItems = ({ data }) => {
  if (!data.length) return null;
  return (
    <List>
      {data.map((item) => (
        <ListItem key={`saved-item-${item.id}`}>{item.id}</ListItem>
      ))}
    </List>
  );
};

SavedItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default memo(SavedItems);
