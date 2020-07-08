import React, { memo } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import StarIcon from "@material-ui/icons/Star";
import styles from "./SearchResults.module.scss";

const SearchResults = ({ resultsList, onSaveAction }) => {
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
          key={`tag-item-${tag}`}
          color="primary"
          style={{ backgroundColor: "teal" }}
          className={styles["search-card-tag"]}
          label={tag}
        />
      ));
  };

  return (
    <>
      {resultsList.map((result, i) => {
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
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                disabled={result.isSaved}
                onClick={() => onSaveAction(result, i)}
              >
                {result.isSaved ? "Saved" : "Save"}
              </Button>
            </div>
            <div className={styles["search-card-details"]}>
              {tags(result.tags)}

              <Grid
                container
                spacing={2}
                className={styles["search-card-details-popularity"]}
              >
                <Grid item xs={3}>
                  <Typography variant="body1">
                    {result.likes}&nbsp;
                    <ThumbUpIcon
                      fontSize="small"
                      className={styles["search-card-details-icon"]}
                    />
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body1">
                    {result.favorites}&nbsp;
                    <StarIcon
                      fontSize="small"
                      className={styles["search-card-details-icon"]}
                    />
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Card>
        );
      })}
    </>
  );
};

SearchResults.propTypes = {
  resultsList: PropTypes.arrayOf(PropTypes.object),
  onSaveAction: PropTypes.func,
};
SearchResults.defaultProps = {
  resultsList: [],
};

export default memo(SearchResults);
