import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { shallowEqual, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import GlobalAppTemplate from "common/components/templates/app/GlobalAppTemplate/GlobalAppTemplate";
import { returnSearchData } from "routes/Search/data/searchThunks";
import { SEARCH_CATEGORIES } from "routes/Search/data/searchConstants";
import SearchResults from "routes/Search/common/components/SearchResults/SearchResults";
import styles from "./Search.module.scss";

const Search = (props) => {
  const dispatch = useDispatch();

  const [textValue, setTextValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const { currentSearch, savedSearches } = useSelector(
    (store) => store.search,
    shallowEqual
  );

  const onKeywordChange = ({ target: { value } }) => {
    if (value) {
      setTextValue(value);
    }
  };

  const onSelectChange = ({ target: { value } }) => {
    if (value) {
      setSelectValue(value);
    }
  };

  const onSearchClick = () => {
    dispatch(returnSearchData(textValue, selectValue));
  };

  const onClear = () => {
    setTextValue("");
    setSelectValue("");
  };

  return (
    <GlobalAppTemplate>
      <Grid container spacing={2} alignItems="stretch" direction="row">
        <Grid item xs>
          <form noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Keyword"
              variant="outlined"
              value={textValue}
              onChange={onKeywordChange}
            />
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Category
              </InputLabel>
              <Select
                variant="outlined"
                fullWidth
                labelId="demo-simple-select-outlined-label"
                value={selectValue}
                onChange={onSelectChange}
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
            </FormControl>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={onSearchClick}
            >
              Search
            </Button>
          </form>
          <SearchResults resultsList={currentSearch.data} />
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
