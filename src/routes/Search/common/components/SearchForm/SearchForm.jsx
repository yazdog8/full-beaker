import React, { memo } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { SEARCH_CATEGORIES } from "routes/Search/data/searchConstants";
import Button from "@material-ui/core/Button";

const SearchForm = ({
  submitAction,
  textChangeAction,
  textValue,
  selectAction,
  selectValue,
}) => {
  return (
    <form noValidate autoComplete="off">
      <TextField
        fullWidth
        label="Keyword"
        variant="outlined"
        value={textValue}
        onChange={textChangeAction}
      />
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
        <Select
          variant="outlined"
          fullWidth
          labelId="demo-simple-select-outlined-label"
          value={selectValue}
          onChange={selectAction}
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
        onClick={submitAction}
      >
        Search
      </Button>
    </form>
  );
};

SearchForm.propTypes = {
  submitAction: PropTypes.func,
  textChangeAction: PropTypes.func,
  selectAction: PropTypes.func,
  textValue: PropTypes.string,
  selectValue: PropTypes.string,
};

export default memo(SearchForm);
