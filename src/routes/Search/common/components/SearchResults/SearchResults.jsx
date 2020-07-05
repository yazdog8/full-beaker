import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const SearchResults = ({ resultsList }) => {
  if (!resultsList.length)
    return (
      <Typography variant="body1" gutterBottom>
        There are no search results to display.
      </Typography>
    );
  return <div></div>;
};

SearchResults.propTypes = {
  resultsList: PropTypes.arrayOf(PropTypes.object),
};
SearchResults.defaultProps = {
  resultsList: [],
};

export default SearchResults;
