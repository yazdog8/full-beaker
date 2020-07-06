import React, { memo } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import styles from "./SearchResults.module.scss";

const SearchResults = ({ resultsList }) => {
  if (!resultsList.length)
    return (
      <Typography variant="body1" gutterBottom>
        There are no search results to display.
      </Typography>
    );

  const tags = (tagList = "") => {
    return tagList
      .split(", ")
      .map((tag) => (
        <Chip
          className={styles["search-card-tag"]}
          color="primary"
          label={tag}
        />
      ));
  };

  return (
    <>
      {resultsList.map((result) => {
        return (
          <Card
            key={`results_list_${result.id}`}
            className={styles["search-card"]}
          >
            <div className={styles["search-card-media"]}>
              <CardMedia
                className={styles["search-card-image"]}
                image={result.previewURL}
                title={result.tags}
              />
              <Button>Foo</Button>
            </div>
            <div className={styles["search-card-details"]}>
              {tags(result.tags)}
            </div>
          </Card>
        );
      })}
    </>
  );
};

SearchResults.propTypes = {
  resultsList: PropTypes.arrayOf(PropTypes.object),
};
SearchResults.defaultProps = {
  resultsList: [],
};

export default memo(SearchResults);
