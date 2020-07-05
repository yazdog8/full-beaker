import React, { memo } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const SearchResults = ({ resultsList }) => {
  console.log(resultsList);
  if (!resultsList.length)
    return (
      <Typography variant="body1" gutterBottom>
        There are no search results to display.
      </Typography>
    );
  return (
    <ul>
      {resultsList.map((result) => {
        return <li key={`results_list_${result.id}`}>{result.downloads}</li>;
      })}
    </ul>
  );
};

SearchResults.propTypes = {
  resultsList: PropTypes.arrayOf(PropTypes.object),
};
SearchResults.defaultProps = {
  resultsList: [],
};

export default memo(SearchResults);
