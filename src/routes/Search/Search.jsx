import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import GlobalAppTemplate from "common/components/templates/app/GlobalAppTemplate/GlobalAppTemplate";
import { returnSearchData } from "routes/Search/data/searchThunks";
import SearchForm from "routes/Search/common/components/SearchForm/SearchForm";
import SearchResults from "routes/Search/common/components/SearchResults/SearchResults";
import SavedItems from "routes/Search/common/components/SavedItems/SavedItems";
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

  const onKeywordChange = ({ target: { value } }) => setTextValue(value);

  const onSelectChange = ({ target: { value } }) => setSelectValue(value);

  const clearSavedItems = () => dispatch(actions.clearSavedItems());

  const onSearchClick = () => {
    const keyWord = textValue.trim();
    setTextValue(keyWord);
    dispatch(returnSearchData(keyWord.toLowerCase(), selectValue));
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
          <Grid container item xs>
            <Grid item xs>
              <Typography variant="h4" gutterBottom>
                Search
              </Typography>
            </Grid>
            <Grid item xs className={styles["search-clear"]}>
              {currentSearch.data.length > 0 && (
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ClearIcon />}
                  onClick={clearSearch}
                >
                  Clear
                </Button>
              )}
            </Grid>
          </Grid>
          <SearchForm
            submitAction={onSearchClick}
            textValue={textValue}
            textChangeAction={onKeywordChange}
            selectAction={onSelectChange}
            selectValue={selectValue}
          />
          {isLoading ? (
            <div className={styles["search-loading"]}>
              <CircularProgress />
            </div>
          ) : (
            <SearchResults
              onSaveAction={saveItem}
              resultsList={currentSearch.data}
            />
          )}
        </Grid>
        <Grid item xs>
          <Grid container item xs>
            <Grid item xs>
              <Typography variant="h4" gutterBottom>
                Saved
              </Typography>
            </Grid>
            <Grid item xs className={styles["search-clear"]}>
              {savedItems.length > 0 && (
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ClearIcon />}
                  onClick={clearSavedItems}
                >
                  Clear
                </Button>
              )}
            </Grid>
          </Grid>
          <SavedItems data={savedItems} />
        </Grid>
      </Grid>
    </GlobalAppTemplate>
  );
};

export default Search;
