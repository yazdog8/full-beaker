import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import CircularProgress from "@material-ui/core/CircularProgress";
import GlobalAppTemplate from "common/components/templates/app/GlobalAppTemplate/GlobalAppTemplate";
import { returnSearchData } from "routes/Search/data/searchThunks";
import { SEARCH_CATEGORIES } from "routes/Search/data/searchConstants";
import SearchResults from "routes/Search/common/components/SearchResults/SearchResults";
import { actions } from "routes/Search/data/search";
import styles from "./Search.module.scss";

const Search = () => {
  const dispatch = useDispatch();

  const [textValue, setTextValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const { currentSearch, savedItems, isLoading } = useSelector(
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
    const keyWord = textValue.trim();
    setTextValue(keyWord);
    dispatch(returnSearchData(keyWord, selectValue));
  };

  const clearSearch = () => {
    setTextValue("");
    setSelectValue("");
    dispatch(actions.clearSearchVariables());
  };

  const saveItem = (item, index) => {
    dispatch(actions.setItemSaved(index));
    dispatch(actions.setSavedItem({ id: item.id, pageURL: item.pageURL }));
  };

  return (
    <GlobalAppTemplate>
      <Grid container spacing={2} alignItems="stretch" direction="row">
        <Grid item xs>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ClearIcon />}
            onClick={clearSearch}
          >
            Reset Search
          </Button>
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
          {isLoading ? (
            <CircularProgress />
          ) : (
            <SearchResults
              onSaveAction={saveItem}
              resultsList={currentSearch.data}
            />
          )}
        </Grid>
        <Grid item xs>
          Saved
        </Grid>
      </Grid>
    </GlobalAppTemplate>
  );
};

export default Search;
