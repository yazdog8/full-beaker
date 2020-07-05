import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import GlobalAppTemplate from "common/components/templates/app/GlobalAppTemplate/GlobalAppTemplate";
import { returnSearchData } from "routes/Search/data/searchThunks";
import { SEARCH_CATEGORIES } from "routes/Search/data/searchConstants";
import SearchResults from "routes/Search/common/components/SearchResults/SearchResults";
import styles from "./Search.module.scss";

const Search = (props) => {
  const dispatch = useDispatch();
  const data = useEffect(() => {
    dispatch(returnSearchData());
  }, []);

  const onSearchChange = ({ target: { value } }) => {
    if (value) console.log(value);
  };

  return (
    <GlobalAppTemplate>
      <Grid container spacing={2} alignItems="stretch" direction="row">
        <Grid item xs>
          <form noValidate autoComplete="off">
            <TextField fullWidth label="Keyword" variant="outlined" />
            <Select
              variant="outlined"
              fullWidth
              value={""}
              onChange={onSearchChange}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {SEARCH_CATEGORIES.map((category) => (
                <MenuItem key={`search_select_${category}`} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </form>
          <SearchResults />
        </Grid>
        <Grid item xs>
          Saved
        </Grid>
      </Grid>
    </GlobalAppTemplate>
  );
};

Search.propTypes = {};
Search.defaultProps = {};

export default Search;
